import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <p className="mb-8">
          Join our community and help make the internet a safer place.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link
            href="#"
            className="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200"
          >
            <i className="fas fa-users mr-2" /> Join the Community
          </Link>
          <Link
            href="#"
            className="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200"
          >
            <i className="fas fa-project-diagram mr-2" /> Explore Projects
          </Link>
          <Link
            href="#"
            className="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200"
          >
            <i className="fas fa-road mr-2" /> Roadmap
          </Link>
          <Link
            href="#"
            className="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200"
          >
            <i className="fas fa-donate mr-2" /> Support Us
          </Link>
        </div>
      </div>
    </section>
  );
}

