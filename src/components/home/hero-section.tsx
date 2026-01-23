export default function HeroSection() {
  return (
    <div className="relative pt-4 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-4xl font-bold mb-5 text-black/90">
          OWASP BLT: Secure the Web, Get Rewarded
        </h1>
        <p className="text-lg mb-4 text-black/80">
          Strengthen <span className="font-bold">worldwide applications</span> by{" "}
          <span className="font-bold">
            finding and fixing security & coding issues
          </span>{" "}
          through <span className="font-bold">bug bounties and issue rewards.</span>{" "}
          Earn <span className="font-bold">money via GitHub Sponsors & BCH</span>{" "}
          and get recognized with <span className="font-bold">BACON</span>, the
          first open-source security token on Bitcoin Runes.
        </p>
      </div>
    </div>
  );
}

