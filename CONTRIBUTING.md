# Contributing to BLT on Cloudflare

Thank you for your interest in contributing to BLT on Cloudflare! This document provides guidelines for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by the [OWASP Code of Conduct](https://owasp.org/www-policy/operational/code-of-conduct).

## How Can I Contribute?

### Reporting Bugs

If you find a bug:

1. Check if the bug has already been reported in [Issues](https://github.com/OWASP-BLT/BLT-on-Cloudflare/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment details

### Suggesting Enhancements

Enhancement suggestions are welcome:

1. Check existing [Issues](https://github.com/OWASP-BLT/BLT-on-Cloudflare/issues) for similar suggestions
2. Create a new issue with:
   - Clear description of the enhancement
   - Why it would be useful
   - Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes locally
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Guidelines

### Code Style

- **JavaScript**: Use ES6+ features, async/await for asynchronous code
- **CSS**: Follow BEM naming convention where applicable
- **HTML**: Use semantic HTML5 elements
- **Comments**: Add comments for complex logic

### Testing

Before submitting a PR:

1. Test locally with `npm run dev`
2. Verify all sections render correctly
3. Check responsive design on different screen sizes
4. Ensure no console errors
5. Test on multiple browsers if possible

### Commit Messages

Follow conventional commit format:

```
type(scope): brief description

Detailed explanation if needed
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```
feat(homepage): add new partner section
fix(css): correct responsive layout on mobile
docs(readme): update installation instructions
```

### Design Consistency

When making design changes:

1. Maintain consistency with the main BLT repository design
2. Use the primary color palette:
   - Primary Red: #dc2626
   - Dark Red: #b91c1c
   - Light Red: #fee2e2
   - Gray shades for text and backgrounds
3. Ensure responsive design works on all screen sizes
4. Keep animations smooth and subtle

### Performance

- Keep the Worker script lightweight
- Minimize CSS and JavaScript file sizes
- Optimize images before adding
- Use CDN links for external libraries

## Project Structure

```
BLT-on-Cloudflare/
├── src/
│   └── index.js          # Main worker script with HTML template
├── public/
│   ├── css/
│   │   └── styles.css    # All styling
│   ├── js/
│   │   └── main.js       # Interactive features
│   └── images/           # Static images
├── wrangler.toml         # Cloudflare configuration
├── package.json          # Dependencies
├── README.md             # Project documentation
├── DEPLOYMENT.md         # Deployment guide
└── CONTRIBUTING.md       # This file
```

## Getting Help

- Join the OWASP Slack workspace
- Ask questions in GitHub Discussions
- Email the BLT team

## Recognition

Contributors will be:
- Listed in the project's contributors
- Mentioned in release notes
- Eligible for OWASP BLT points (if applicable)

## License

By contributing, you agree that your contributions will be licensed under the AGPL-3.0 License.

Thank you for contributing to BLT on Cloudflare! 🎉
