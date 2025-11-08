#!/usr/bin/env node

/**
 * Build script for BLT-on-Cloudflare Pages
 * Processes components and generates static index.html for Pages deployment
 */

const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'src', 'index.js');
const componentsPath = path.join(__dirname, '..', 'src', 'components');
const publicPath = path.join(__dirname, '..', 'public');
const htmlPath = path.join(publicPath, 'index.html');

try {
  // Read component files
  const components = {};
  const componentFiles = fs.readdirSync(componentsPath).filter(file => file.endsWith('.js'));
  
  componentFiles.forEach(file => {
    const componentPath = path.join(componentsPath, file);
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    
    // Extract the exported template name and content
    const exportMatch = componentContent.match(/export const (\w+) = `([\s\S]*?)`;\s*$/m);
    if (exportMatch) {
      const [, templateName, templateContent] = exportMatch;
      components[templateName] = templateContent;
    }
  });
  
  // Read the main index.js file
  let indexJs = fs.readFileSync(srcPath, 'utf8');
  
  // Extract HTML template
  const templateStart = indexJs.indexOf('const HTML_TEMPLATE = `');
  const templateEnd = indexJs.indexOf('`;\n\nexport default', templateStart);
  
  if (templateStart === -1 || templateEnd === -1) {
    throw new Error('Could not extract HTML template from src/index.js');
  }
  
  // Get the template content
  let htmlContent = indexJs.substring(templateStart + 'const HTML_TEMPLATE = `'.length, templateEnd);
  
  // Replace all component placeholders with actual content
  Object.keys(components).forEach(templateName => {
    const placeholder = '${' + templateName + '}';
    htmlContent = htmlContent.replace(new RegExp('\\$\\{' + templateName + '\\}', 'g'), components[templateName]);
  });
  
  // Ensure public directory exists
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }
  
  // Write HTML file
  fs.writeFileSync(htmlPath, htmlContent);
  
  console.log('✓ Build successful!');
  console.log(`  Generated: ${htmlPath}`);
  
} catch (error) {
  console.error('✗ Build failed:', error.message);
  process.exit(1);
}
