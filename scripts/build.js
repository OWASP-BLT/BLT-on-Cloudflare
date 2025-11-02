#!/usr/bin/env node

/**
 * Build script for BLT-on-Cloudflare Pages
 * Extracts HTML template from source and generates static index.html for Pages deployment
 */

const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'src', 'index.js');
const publicPath = path.join(__dirname, '..', 'public');
const htmlPath = path.join(publicPath, 'index.html');

try {
  // Read the Worker source file
  const indexJs = fs.readFileSync(srcPath, 'utf8');
  
  // Extract HTML template using a delimited pattern
  // The pattern looks for: const HTML_TEMPLATE = `...`; followed by export default
  const templateStart = indexJs.indexOf('const HTML_TEMPLATE = `');
  const templateEnd = indexJs.indexOf('`;\n\nexport default', templateStart);
  
  if (templateStart === -1 || templateEnd === -1) {
    throw new Error('Could not extract HTML template from src/index.js. Expected format: const HTML_TEMPLATE = `...`; followed by export default');
  }
  
  // Extract the content between the backticks
  const htmlContent = indexJs.substring(templateStart + 'const HTML_TEMPLATE = `'.length, templateEnd);
  
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
