import ToolsSection from "../organizations/tools-section";

export default function ProjectsTools() {
  const tools = [
    {
      icon: "fas fa-project-diagram",
      title: "Projects",
      description: "Manage your security projects",
      href: "/projects",
    },
    {
      icon: "fas fa-code-branch",
      title: "Repositories",
      description: "Connect and monitor GitHub repos",
      href: "/repositories",
    },
    {
      icon: "fas fa-gavel",
      title: "Bid on Issues",
      description: "Place bids on open issues",
      href: "/bidding",
    },
    {
      icon: "fas fa-hand-holding-dollar",
      title: "Funding",
      description: "Manage project funding & rewards",
      href: "/funding",
    },
    {
      icon: "fas fa-bacon",
      title: "Bacon",
      description: "Earn & manage Bacon tokens",
      href: "/bacon",
    },
  ];

  return (
    <ToolsSection title="Tools for Projects" tools={tools} bgColor="bg-white" />
  );
}
