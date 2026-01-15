import Link from "next/link";

interface ActivityItem {
  title: string;
  href: string;
  author?: string;
  timeAgo?: string;
  language?: string;
}

interface LatestActivityProps {
  repositories?: ActivityItem[];
  discussions?: ActivityItem[];
}

export default function LatestActivity({
  repositories,
  discussions,
}: LatestActivityProps) {
  const defaultRepositories: ActivityItem[] = [
    { title: "awesome-security-tools", href: "#", language: "Python" },
    { title: "vulnerability-scanner", href: "#", language: "JavaScript" },
    { title: "penetration-testing-kit", href: "#", language: "Go" },
    { title: "security-automation", href: "#", language: "Python" },
    { title: "web-security-checklist", href: "#", language: "Markdown" },
  ];

  const defaultDiscussions: ActivityItem[] = [
    {
      title: "Best practices for SQL injection prevention",
      href: "#",
      author: "SecurityExpert",
      timeAgo: "2 hours ago",
    },
    {
      title: "XSS vulnerabilities in modern frameworks",
      href: "#",
      author: "DevSecOps",
      timeAgo: "5 hours ago",
    },
    {
      title: "How to get started with bug bounty hunting?",
      href: "#",
      author: "NewHunter",
      timeAgo: "1 day ago",
    },
    {
      title: "CSRF protection implementation guide",
      href: "#",
      author: "WebSecPro",
      timeAgo: "2 days ago",
    },
  ];

  const displayRepos = repositories || defaultRepositories;
  const displayDiscussions = discussions || defaultDiscussions;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Latest Repositories */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Latest Repositories
                </h3>
                <span className="text-sm text-gray-500">({displayRepos.length} total)</span>
              </div>
              <div className="space-y-4">
                {displayRepos.map((repo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href={repo.href}
                      className="text-sm hover:text-[#e74c3c] truncate max-w-[280px]"
                    >
                      {repo.title}
                    </Link>
                    {repo.language && (
                      <span className="text-xs text-gray-500">
                        {repo.language}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="#"
                  className="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium"
                >
                  View All
                </Link>
                <Link
                  href="#"
                  className="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Add Repo
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Forum Posts */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Recent Discussions
                </h3>
                <span className="text-sm text-gray-500">({displayDiscussions.length} recent)</span>
              </div>
              <div className="space-y-4">
                {displayDiscussions.map((discussion, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <Link
                      href={discussion.href}
                      className="text-sm hover:text-[#e74c3c] font-medium"
                    >
                      {discussion.title}
                    </Link>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      {discussion.author && (
                        <span className="flex items-center gap-1">
                          <i className="fas fa-user" />
                          {discussion.author}
                        </span>
                      )}
                      {discussion.timeAgo && (
                        <span className="flex items-center gap-1">
                          <i className="fas fa-clock" />
                          {discussion.timeAgo}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="#"
                  className="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium"
                >
                  View All
                </Link>
                <Link
                  href="#"
                  className="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium flex items-center"
                >
                  <i className="fas fa-plus mr-1" />
                  New Discussion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

