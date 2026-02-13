"use client";

import { formatRelativeTime } from "@/lib/utils";
// using FontAwesome icons via class names
import Link from "next/link";
import BugCard from "./bug-card";
interface Bug {
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

interface BugsSectionProps {
  bugs?: Bug[];
}

export default function BugsSection({ bugs }: BugsSectionProps) {
  // Fetch bugs from Django API
  // const { data: apiBugs, isLoading } = useIssues({ status: "open" });

  const defaultBugs: Bug[] = [
    {
      title: "XSS vulnerability in search form",
      domain: "example.com",
      domainHref: "#",
      reporter: "SecurityPro",
      reporterHref: "/users/securitypro",
      reporterAvatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      timeAgo: "3 hours ago",
      status: "open",
      likes: 15,
      severity: "high",
      href: "/issues/xss-vulnerability-search-form",
    },
    {
      title: "SQL injection in login page",
      domain: "testsite.org",
      domainHref: "#",
      reporter: "BugHunter",
      reporterHref: "/users/bughunter",
      reporterAvatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      timeAgo: "1 day ago",
      status: "resolved",
      likes: 28,
      severity: "critical",
      href: "/issues/sql-injection-login",
    },
  ];

  // Use API data if available, otherwise use prop or default
  const displayBugs = bugs || defaultBugs;

  // if (isLoading) {
  //   return (
  //     <section className="py-12 bg-gray-50">
  //       <div className="max-w-7xl mx-auto px-4">
  //         <div className="text-center">Loading bug reports...</div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Bug Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayBugs.map((b: any, index) => (
            <BugCard
              key={index}
              title={b.title}
              domain={b.domain ?? b.domain_name ?? ""}
              domainHref={b.domain_url ?? b.domainHref}
              reporter={b.reporter_username ?? String(b.reporter)}
              reporterHref={
                b.reporter_url ?? b.reporterHref ?? `/users/${b.reporter}`
              }
              reporterAvatar={b.reporter_avatar ?? b.reporterAvatar}
              timeAgo={
                b.created_at
                  ? formatRelativeTime(b.created_at)
                  : b.timeAgo ?? ""
              }
              status={b.status}
              likes={b.likes_count ?? b.likes ?? 0}
              severity={b.severity}
              href={b.href ?? `/issues/${b.id}`}
            />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/issues"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#e74c3c] hover:bg-[#d44637] transition-colors"
          >
            <i className="fas fa-bug mr-2" /> View All Bug Reports
          </Link>
        </div>
      </div>
    </section>
  );
}
