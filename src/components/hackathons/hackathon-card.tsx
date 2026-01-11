import Link from "next/link";

interface HackathonCardProps {
  title: string;
  organizer: string;
  organizerLink?: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "active" | "upcoming" | "ended";
  href?: string;
}

export default function HackathonCard({
  title,
  organizer,
  organizerLink,
  description,
  startDate,
  endDate,
  status,
  href = "#",
}: HackathonCardProps) {
  const statusConfig = {
    active: {
      className: "bg-green-100 text-green-800",
      label: "Active",
    },
    upcoming: {
      className: "bg-blue-100 text-blue-800",
      label: "Upcoming",
    },
    ended: {
      className: "bg-gray-100 text-gray-800",
      label: "Ended",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="h-48 bg-gradient-to-r from-[#e74c3c] to-red-700 flex items-center justify-center">
        <i className="fas fa-code text-white text-5xl" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}
          >
            {config.label}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          Organized by{" "}
          {organizerLink ? (
            <Link href={organizerLink} className="text-[#e74c3c] hover:underline">
              {organizer}
            </Link>
          ) : (
            <span>{organizer}</span>
          )}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <i className="far fa-calendar mr-2" />
          <span>
            {startDate} - {endDate}
          </span>
        </div>
        <Link
          href={href}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e74c3c] hover:bg-red-700 transition-colors w-full"
        >
          View Details
          <i className="fas fa-arrow-right ml-2" />
        </Link>
      </div>
    </div>
  );
}

