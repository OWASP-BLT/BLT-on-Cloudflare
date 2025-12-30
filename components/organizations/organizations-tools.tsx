import ToolsSection from "./tools-section";

export default function OrganizationsTools() {
  const primaryTools = [
    {
      icon: "fas fa-building",
      title: "Organizations",
      description: "Browse and manage organizations",
      href: "/organizations",
    },
    {
      icon: "fas fa-plus",
      title: "Register Organization",
      description: "Add your company to our platform",
      href: "/register-organization",
    },
    {
      icon: "fas fa-globe",
      title: "Domains",
      description: "Manage website domains and assets",
      href: "/domains",
    },
    {
      icon: "fas fa-bug",
      title: "Bugs",
      description: "View and track reported vulnerabilities",
      href: "/issues",
    },
    {
      icon: "fas fa-exclamation-circle",
      title: "Issues",
      description: "Track GitHub issues and tasks",
      href: "/github-issues",
    },
  ];

  const secondaryTools = [
    {
      icon: "fas fa-dollar-sign",
      title: "Bounties",
      description: "Set up and manage bug bounty programs",
      href: "/bounties",
    },
    {
      icon: "fas fa-calendar-check",
      title: "Check-ins",
      description: "Schedule and track security reviews",
      href: "/checkin",
    },
    {
      icon: "fas fa-clock",
      title: "Time Logs",
      description: "Track time spent on security tasks",
      href: "/sizzle",
    },
    {
      icon: "fas fa-trademark",
      title: "Trademarks",
      description: "Search and monitor trademark usage",
      href: "/trademark-search",
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "Map",
      description: "View global security activity",
      href: "/map",
    },
  ];

  return (
    <>
      <ToolsSection title="Tools for Organizations" tools={primaryTools} />
      <ToolsSection
        title=""
        tools={secondaryTools}
        bgColor="bg-gray-50"
      />
    </>
  );
}

