import Link from "next/link";
import { ReactNode } from "react";
import { LeaderboardEntry as APIEntry } from '@/lib/types';

type UIEntry = {
  rank: number;
  name: string;
  href?: string;
  avatar?: string;
  value: string | number;
  valueLabel?: ReactNode;
};

type Entry = APIEntry | UIEntry;

interface LeaderboardCardProps {
  title: string;
  icon: string;
  entries: Entry[];
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
          {entries.map((entry) => {
            const rank = 'rank' in entry ? entry.rank : (entry as any).rank;
            const name = 'name' in entry ? (entry as any).name : entry.user.username;
            const avatar = 'avatar' in entry ? (entry as any).avatar : entry.user.avatar;
            const href = 'href' in entry ? (entry as any).href : undefined;
            const value = (entry as any).value ?? (entry as any).score;
            const valueLabel = (entry as any).valueLabel;

            return (
              <div key={rank} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[#e74c3c] font-bold">{rank}</span>
                  {avatar && (
                    <img
                      src={avatar}
                      alt={name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  {href ? (
                    <Link href={href} className="font-medium hover:text-[#e74c3c]">
                      {name}
                    </Link>
                  ) : (
                    <span className="font-medium">{name}</span>
                  )}
                </div>
                {valueLabel ? (
                  <div className="flex items-center">{valueLabel}</div>
                ) : (
                  <span className="text-green-600 font-medium">{value}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

