"use client";

import LeaderboardCard from "./leaderboard-card";

interface LeaderboardSectionProps {
  totalBounties?: string;
}

export default function LeaderboardSection({
  totalBounties = "$155",
}: LeaderboardSectionProps) {

  // Fallback to default data if API data not available
  const defaultTopEarners = [
    {
      rank: 1,
      name: "SecurityPro",
      href: "/users/securitypro",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "$50.00",
    },
    {
      rank: 2,
      name: "BugHunter",
      href: "/users/bughunter",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "$35.00",
    },
    {
      rank: 3,
      name: "CodeMaster",
      href: "/users/codemaster",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "$25.00",
    },
  ];

  const defaultTopBugReporters = [
    {
      rank: 1,
      name: "SecurityPro",
      href: "/users/securitypro",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "45 bugs",
    },
    {
      rank: 2,
      name: "BugHunter",
      href: "/users/bughunter",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "32 bugs",
    },
    {
      rank: 3,
      name: "CodeMaster",
      href: "/users/codemaster",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "28 bugs",
    },
  ];

  const defaultTopPRContributors = [
    {
      rank: 1,
      name: "GitContributor1",
      href: "#",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "24 PRs",
    },
    {
      rank: 2,
      name: "GitContributor2",
      href: "#",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "12 PRs",
    },
    {
      rank: 3,
      name: "GitContributor3",
      href: "#",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "10 PRs",
    },
  ];

  const defaultTopReferrals = [
    {
      rank: 1,
      name: "Referrer1",
      href: "#",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "20 pts",
    },
    {
      rank: 2,
      name: "Referrer2",
      href: "#",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "16 pts",
    },
    {
      rank: 3,
      name: "Referrer3",
      href: "#",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      value: "12 pts",
    },
  ];

  const cards = [
    {
      title: "Top Contributors",
      description: "People who contributed the most",
      icon: "fas fa-award",
    },
    {
      title: "Top Fixers",
      description: "Fixed the most issues",
      icon: "fas fa-bolt",
    },
    {
      title: "Top Projects",
      description: "Projects with most activity",
      icon: "fas fa-box",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Leaderboards</h2>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-md mb-8">
            <i className="fas fa-trophy text-[#e74c3c] mr-3" />
            <span className="text-xl font-bold">
              Total Bounties Earned: {totalBounties}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <LeaderboardCard
            title="Top Earners"
            icon="fas fa-dollar-sign"
            entries={defaultTopEarners}
          />
          <LeaderboardCard
            title="Top Bug Reporters"
            icon="fas fa-bug"
            entries={defaultTopBugReporters}
          />
          <LeaderboardCard
            title="TOP BLT PRs - Nov"
            icon="fas fa-code-branch"
            entries={defaultTopPRContributors}
          />
          <LeaderboardCard
            title="Top Referrals"
            icon="fas fa-user-plus"
            entries={defaultTopReferrals}
          />
        </div>
      </div>
    </section>
  );
}
