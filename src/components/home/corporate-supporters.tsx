import Link from "next/link";

export default function CorporateSupporters() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <i className="fas fa-handshake text-[#e74c3c]" />
          Corporate Supporters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* OWASP */}
          <div className="flex flex-col items-center text-center">
            <Link
              href="#"
              className="w-32 h-32 flex items-center justify-center mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <i className="fas fa-shield-alt text-5xl text-gray-400" />
              </div>
            </Link>
            <p className="text-gray-700">
              BLT is an official OWASP project, adhering to the highest
              standards of open-source security.
            </p>
          </div>

          {/* Sentry */}
          <div className="flex flex-col items-center text-center">
            <Link
              href="#"
              className="w-32 h-32 flex items-center justify-center mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <i className="fas fa-bug text-5xl text-gray-400" />
              </div>
            </Link>
            <p className="text-gray-700">
              Sentry provides BLT with a free plan for error monitoring and
              performance tracking.
            </p>
          </div>

          {/* Google */}
          <div className="flex flex-col items-center text-center">
            <Link
              href="#"
              className="w-32 h-32 flex items-center justify-center mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <i className="fab fa-google text-5xl text-gray-400" />
              </div>
            </Link>
            <p className="text-gray-700">
              Google supports BLT through{" "}
              <Link href="#" className="text-[#e74c3c] hover:text-[#c0392b]">
                Google Summer of Code
              </Link>
              , fostering student contributions.
            </p>
          </div>

          {/* Your Logo Here */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center mb-4 border-2 border-dashed border-[#e74c3c] rounded-lg">
              <i className="fas fa-image text-6xl text-[#e74c3c]" />
            </div>
            <p className="text-gray-700">
              Donate to the BLT project to support our development and have your
              logo featured here.{" "}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e74c3c] hover:text-[#c0392b]"
              >
                Become a Supporter
              </Link>            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

