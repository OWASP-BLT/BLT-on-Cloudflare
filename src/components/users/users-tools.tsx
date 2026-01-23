import ToolsSection from "../organizations/tools-section";

export default function UsersTools() {
  const tools = [
    {
      icon: "fas fa-users",
      title: "Users",
      description: "Manage team members",
      href: "/users",
    },
    {
      icon: "fas fa-user-group",
      title: "Teams",
      description: "Create & manage teams",
      href: "/teams",
    },
    {
      icon: "fas fa-flag",
      title: "Challenges",
      description: "Security challenges",
      href: "/challenges",
    },
    {
      icon: "fas fa-trophy",
      title: "Leaderboards",
      description: "Track achievements",
      href: "/leaderboard",
    },
    {
      icon: "fas fa-medal",
      title: "Badges",
      description: "Earn achievements",
      href: "/badges",
    },
    {
      icon: "fas fa-chart-line",
      title: "Analytics",
      description: "Team performance",
      href: "/analytics",
    },
  ];

  return (
    <ToolsSection
      title="Tools for Users & Teams"
      tools={tools}
      bgColor="bg-gray-50"
    />
  );
}
