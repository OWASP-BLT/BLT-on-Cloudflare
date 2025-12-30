import Link from "next/link";

export default function ReferralProgram() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-[#e74c3c]">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-red-50 rounded-lg">
            <i className="fas fa-users text-[#e74c3c] text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Join Our Referral Program</h3>
            <p className="text-gray-600">
              Sign in to get your referral link and start earning points!
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/login"
            className="px-4 py-2 bg-[#e74c3c] text-white rounded-lg hover:bg-[#c0392b] hover:text-white transition-colors"
          >
            <i className="fas fa-sign-in-alt mr-2" />
            Sign In to Participate
          </Link>
        </div>
      </div>
    </div>
  );
}

