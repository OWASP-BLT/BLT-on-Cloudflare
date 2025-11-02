# BLT on Cloudflare Pages

This is the OWASP BLT website running on Cloudflare Pages. It features the same design as the main [BLT repository](https://github.com/OWASP-BLT/BLT) homepage but optimized for Cloudflare's edge network.

## 🚀 Features

- **Fast Performance**: Runs on Cloudflare's global edge network
- **Same Design**: Matches the exact design of the BLT main homepage
- **Modern Stack**: Built with vanilla JavaScript, CSS, and HTML
- **Responsive**: Fully responsive design for all devices
- **Static Site**: Deployed as a static site on Cloudflare Pages

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cloudflare account (for deployment)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/OWASP-BLT/BLT-on-Cloudflare.git
cd BLT-on-Cloudflare
```

2. Install dependencies:
```bash
npm install
```

3. Build the static site:
```bash
npm run build
```

This generates `public/index.html` from the template in `src/index.js`.

## 🏃 Development

Run the development server:
```bash
npm run dev
```

This will start a local development server at `http://localhost:8787`

## 🚢 Deployment

Deploy to Cloudflare Pages using automatic Git integration:

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run deploy` (or `npm run build`)
3. Set build output directory: `public`
4. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
BLT-on-Cloudflare/
├── src/
│   └── index.js          # HTML template source
├── public/
│   ├── index.html        # Generated HTML (from build)
│   ├── css/
│   │   └── styles.css    # Styling
│   └── js/
│       └── main.js       # JavaScript functionality
├── scripts/
│   └── build.js          # Build script to generate HTML
├── wrangler.toml         # Cloudflare Pages configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

## 🔨 Build Process

The project uses a build script to generate the static HTML:

1. The HTML template is defined in `src/index.js`
2. Running `npm run build` extracts the template and generates `public/index.html`
3. The `public/` directory contains all files served by Cloudflare Pages

**Note**: If you modify `src/index.js`, remember to run `npm run build` to regenerate the HTML file.

## 🎨 Design

The design is based on the official OWASP BLT homepage with:
- Clean, modern interface
- Red accent color (#dc2626) matching OWASP branding
- Responsive grid layouts
- Smooth animations and transitions
- Component showcase section
- Partner highlights

## 🔗 Links

- **Main BLT Repository**: [OWASP-BLT/BLT](https://github.com/OWASP-BLT/BLT)
- **Live Site**: [owaspblt.org](https://www.owaspblt.org)
- **OWASP Project Page**: [OWASP Bug Logging Tool](https://owasp.org/www-project-bug-logging-tool/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details.

## 👥 Authors

- OWASP BLT Team

## 🙏 Acknowledgments

- OWASP Foundation for supporting the BLT project
- Cloudflare for providing Workers platform
- All contributors to the main BLT project