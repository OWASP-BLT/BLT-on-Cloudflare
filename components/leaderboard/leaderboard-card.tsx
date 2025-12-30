import Link from "next/link";
import { ReactNode } from "react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  href?: string;
  avatar?: string;
  value: string | number;
  valueLabel?: ReactNode;
}

interface LeaderboardCardProps {
  title: string;
  icon: string;
  entries: LeaderboardEntry[];
  bgColor?: string;
}

export default function LeaderboardCard({
  title,
  icon,
  entries,
  bgColor = "bg-[#e74c3c]",
}: LeaderboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className={`p-4 border-b border-gray-200 ${bgColor} text-white`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <i className={icon} />
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.rank} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[#e74c3c] font-bold">{entry.rank}</span>
                {entry.avatar && (
                  <img
                    src={entry.avatar}
                    alt={entry.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                {entry.href ? (
                  <Link
                    href={entry.href}
                    className="font-medium hover:text-[#e74c3c]"
                  >
                    {entry.name}
                  </Link>
                ) : (
                  <span className="font-medium">{entry.name}</span>
                )}
              </div>
              {entry.valueLabel ? (
                <div className="flex items-center">{entry.valueLabel}</div>
              ) : (
                <span className="text-green-600 font-medium">{entry.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

