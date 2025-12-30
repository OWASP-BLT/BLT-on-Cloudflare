import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="py-1">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
              <i className="fas fa-shield-virus fa-2xl text-[#e74c3c]" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Protect Applications</h3>
            <p className="text-sm text-gray-600">
              Safeguard your applications from security vulnerabilities.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
              <i className="fas fa-hand-holding-usd fa-2xl text-[#e74c3c]" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Earn Rewards</h3>
            <p className="text-sm text-gray-600">
              Get rewarded for your security findings.
            </p>
            <Link
              href="/bounties"
              className="inline-block mt-3 text-[#e74c3c] hover:text-[#c0392b] font-medium text-sm group"
            >
              <span className="flex items-center gap-1">
                View Bounties
                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1" />
              </span>
            </Link>          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
              <i className="fas fa-robot fa-2xl text-[#e74c3c]" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Automate Security</h3>
            <p className="text-sm text-gray-600">
              Streamline your security workflows.
            </p>
          </div>

          {/* Education Feature */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
              <i className="fas fa-graduation-cap fa-2xl text-[#e74c3c]" />
            </div>
            <div className="relative">
              <span className="absolute -top-1 right-0 inline-flex items-center px-2 py-0.5 text-xs font-medium bg-[#e74c3c] text-white rounded-full animate-pulse">
                NEW
              </span>
              <h3 className="text-lg font-semibold mb-1">Learn & Grow</h3>
            </div>
            <p className="text-sm text-gray-600">
              Access expert-led security courses.
            </p>
            <Link
              href="/education"
              className="inline-block mt-3 text-[#e74c3c] hover:text-[#c0392b] font-medium text-sm group"
            >
              <span className="flex items-center gap-1">
                Start Learning
                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>          </div>
      </div>
    </section>
  );
}

