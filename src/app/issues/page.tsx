// import BugsSection from "@/components/issues/bugs-section";

// export default function IssuesPage() {
//   // In a real app, you'd fetch bugs from an API
//   const bugs = [
//     {
//       title: "XSS vulnerability in search form",
//       domain: "example.com",
//       domainHref: "#",
//       reporter: "SecurityPro",
//       reporterHref: "/users/securitypro",
//       reporterAvatar:
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
//       timeAgo: "3 hours ago",
//       status: "open" as const,
//       likes: 15,
//       severity: "high" as const,
//       href: "/issues/xss-vulnerability-search-form",
//     },
//     {
//       title: "SQL injection in login page",
//       domain: "testsite.org",
//       domainHref: "#",
//       reporter: "BugHunter",
//       reporterHref: "/users/bughunter",
//       reporterAvatar:
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
//       timeAgo: "1 day ago",
//       status: "resolved" as const,
//       likes: 28,
//       severity: "critical" as const,
//       href: "/issues/sql-injection-login",
//     },
//   ];

//   return (
//     <div className="relative pt-24 mt-4">
//       <BugsSection bugs={bugs} />
//     </div>
//   );
// }