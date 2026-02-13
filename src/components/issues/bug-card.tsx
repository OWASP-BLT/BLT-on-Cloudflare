// using FontAwesome icons via class names
import Link from "next/link";

interface BugCardProps {
  title: string;
  domain: string;
  domainHref?: string;
  reporter: string;
  reporterHref?: string;
  reporterAvatar?: string;
  timeAgo: string;
  status: "open" | "resolved" | "closed";
  likes: number;
  severity: "low" | "medium" | "high" | "critical";
  href?: string;
}

export default function BugCard({
  title,
  domain,
  domainHref,
  reporter,
  reporterHref,
  reporterAvatar,
  timeAgo,
  status,
  likes,
  severity,
  href = "#",
}: BugCardProps) {
  const statusConfig = {
    open: {
      className: "bg-red-100 text-red-800",
      label: "Open",
    },
    resolved: {
      className: "bg-green-100 text-green-800",
      label: "Resolved",
    },
    closed: {
      className: "bg-gray-100 text-gray-800",
      label: "Closed",
    },
  };

  const severityConfig = {
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical",
  };

  const config = statusConfig[status];

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 truncate">
            {title}
          </h3>
          <span
            className={`px-2 py-1 ${config.className} rounded-full text-xs`}
          >
            {config.label}
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <i className="fas fa-globe mr-2" />
          {domainHref ? (
            <Link
              href={domainHref}
              className="hover:text-[#e74c3c] truncate"
              target="_blank"
            >
              {domain}
            </Link>
          ) : (
            <span className="truncate">{domain}</span>
          )}
        </div>
        <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-32 flex items-center justify-center">
          <i className="far fa-image text-4xl text-gray-400" aria-hidden="true" />
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            {reporterAvatar && (
              <img
                src={reporterAvatar}
                alt={reporter}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full mr-2"
              />
            )}
            {reporterHref ? (
              <Link href={reporterHref} className="hover:text-[#e74c3c]">
                {reporter}
              </Link>
            ) : (
              <span>{reporter}</span>
            )}
          </div>
          <span>{timeAgo}</span>
        </div>
        <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <span className="flex items-center mr-4">
              <i className="fas fa-thumbs-up text-green-500 mr-1" /> {likes}
            </span>
            <span className="flex items-center">
              <i className="fas fa-tags text-blue-500 mr-1" />
              {severityConfig[severity]}
            </span>
          </div>
          <Link
            href={href}
            className="text-[#e74c3c] hover:text-[#c0392b] font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
