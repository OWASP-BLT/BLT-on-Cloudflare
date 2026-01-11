import Link from "next/link";

export default function OrganizationCTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="mx-2">
          <Link
            href="/register-organization"
            className="flex items-center justify-center gap-3 px-4 py-3 text-xl rounded-md border border-gray-300 hover:text-black hover:shadow-md transition-all duration-300"
          >
            <i className="fas fa-building text-[#e74c3c]" />
            <span className="font-medium text-center">Register Organization</span>
          </Link>
        </div>
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </div>
  );
}

