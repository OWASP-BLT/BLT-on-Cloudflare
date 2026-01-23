import Link from "next/link";

interface Tool {
  icon: string;
  title: string;
  description: string;
  href: string;
}

interface ToolsSectionProps {
  title: string;
  tools: Tool[];
  bgColor?: string;
}

export default function ToolsSection({
  title,
  tools,
  bgColor = "bg-gray-50",
}: ToolsSectionProps) {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <i className={`${tool.icon} text-3xl text-[#e74c3c] mb-3`} />
              <span className="text-lg font-medium text-center">
                {tool.title}
              </span>
              <p className="text-xs text-gray-600 text-center mt-1">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
