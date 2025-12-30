import Link from "next/link";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  githubUrl: string;
  stars: string;
  actionLabel: string;
  actionHref: string;
  actionIcon: string;
}

function ProjectCard({
  icon,
  title,
  description,
  githubUrl,
  stars,
  actionLabel,
  actionHref,
  actionIcon,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <i className={`${icon} text-2xl text-[#e74c3c]`} />
        <h4 className="font-bold text-lg">
          <Link href={actionHref} className="hover:text-[#e74c3c] transition-colors">
            {title}
          </Link>
        </h4>
      </div>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex flex-col gap-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <i className="fab fa-github mr-2" />
          <i className="fas fa-star text-yellow-400 mr-2" /> Star
          <span className="ml-2 bg-gray-100 px-2 py-0.5 rounded-full text-sm">
            {stars}
          </span>
        </a>
        <Link
          href={actionHref}
          className="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200"
        >
          <i className={`${actionIcon} mr-2`} /> {actionLabel}
        </Link>
      </div>
    </div>
  );
}

export default function ProjectCards() {
  const projects = [
    {
      icon: "fas fa-shield-alt",
      title: "Django Core",
      description:
        "The main engine powering OWASP BLT's system API and Slack Bot.",
      githubUrl: "https://github.com/OWASP-BLT/BLT",
      stars: "1.2k",
      actionLabel: "Report a Bug",
      actionHref: "/issues/new?project=blt-core",
      actionIcon: "fas fa-bug",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Flutter iOS App",
      description: "Mobile application for on-the-go bug reporting and management.",
      githubUrl: "https://github.com/OWASP-BLT/BLT-Flutter",
      stars: "156",
      actionLabel: "Download App",
      actionHref: "#",
      actionIcon: "fab fa-apple",
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Chrome Extension",
      description: "Browser extension for quick bug reporting and screenshots.",
      githubUrl: "https://github.com/OWASP-BLT/BLT-Extension",
      stars: "89",
      actionLabel: "Install Extension",
      actionHref: "#",
      actionIcon: "fab fa-chrome",
    },
    {
      icon: "fas fa-bolt",
      title: "GitHub Action",
      description: "GitHub Action for automated security checks and reporting.",
      githubUrl: "https://github.com/OWASP-BLT/BLT-Action",
      stars: "45",
      actionLabel: "Use Latest",
      actionHref: "#",
      actionIcon: "fas fa-code-branch",
    },
  ];

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <i className="fas fa-code-branch text-2xl text-[#e74c3c]" />
            <h2 className="text-3xl font-bold">Our Components</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
          <p className="text-gray-600 text-base max-w-9xl mx-auto mt-3">
            Four key components power OWASP BLT. The core, mobile access,
            browser integration, and automation—working together to secure
            applications worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

