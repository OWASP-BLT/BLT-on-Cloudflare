export default function Footer() {
  return (
    <footer className="py-8 max-w-7xl mx-auto">
      <div className="text-center">
        <p className="mb-4">Follow us on:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/OWASP_BLT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a
            href="https://github.com/OWASP-BLT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
        <p className="mt-4">© 2024 OWASP BLT. All rights reserved.</p>
        <p>Last commit: abc123def</p>
      </div>
    </footer>
  );
}
