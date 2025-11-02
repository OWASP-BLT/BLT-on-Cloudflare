# BLT on Cloudflare Workers

This is the OWASP BLT website running on Cloudflare Workers. It features the same design as the main [BLT repository](https://github.com/OWASP-BLT/BLT) homepage but optimized for Cloudflare's edge network.

## 🚀 Features

- **Fast Performance**: Runs on Cloudflare's global edge network
- **Same Design**: Matches the exact design of the BLT main homepage
- **Modern Stack**: Built with vanilla JavaScript, CSS, and Cloudflare Workers
- **Responsive**: Fully responsive design for all devices

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cloudflare account
- Wrangler CLI

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

## 🏃 Development

Run the development server:
```bash
npm run dev
```

This will start a local development server at `http://localhost:8787`

## 🚢 Deployment

Deploy to Cloudflare Workers:
```bash
npm run deploy
```

## 📁 Project Structure

```
BLT-on-Cloudflare/
├── src/
│   └── index.js          # Main worker script
├── public/
│   ├── css/
│   │   └── styles.css    # Styling
│   ├── js/
│   │   └── main.js       # JavaScript functionality
│   └── images/           # Static images
├── wrangler.toml         # Cloudflare Workers configuration
├── package.json          # Project dependencies
└── README.md             # This file
```

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