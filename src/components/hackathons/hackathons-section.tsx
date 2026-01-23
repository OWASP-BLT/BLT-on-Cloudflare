'use client';

// import { useHackathons } from "@/lib/hooks/use-hackathons";
import Link from "next/link";
import HackathonCard from "./hackathon-card";
interface Hackathon {
  title: string;
  organizer: string;
  organizerLink?: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "active" | "upcoming" | "ended";
  href?: string;
}

interface HackathonsSectionProps {
  hackathons?: Hackathon[];
}

export default function HackathonsSection({
  hackathons,
}: HackathonsSectionProps) {
  // // Fetch hackathons from Django API
  // const { data: apiHackathons, isLoading } = useHackathons();

  const defaultHackathons: Hackathon[] = [
    {
      title: "Security Hackathon 2024",
      organizer: "OWASP",
      organizerLink: "#",
      description:
        "Join us for an exciting security hackathon where you can compete with other security researchers and win amazing prizes!",
      startDate: "Nov 01, 2024",
      endDate: "Nov 30, 2024",
      status: "active",
      href: "/hackathons/security-hackathon-2024",
    },
    {
      title: "Web Security Challenge",
      organizer: "BLT Community",
      organizerLink: "#",
      description:
        "Test your web security skills in this comprehensive challenge covering various vulnerability types and exploitation techniques.",
      startDate: "Dec 01, 2024",
      endDate: "Dec 15, 2024",
      status: "upcoming",
      href: "/hackathons/web-security-challenge",
    },
  ];

  // Use API data if available, otherwise use prop or default
  const displayHackathons = hackathons || defaultHackathons;

  // if (isLoading) {
  //   return (
  //     <section className="py-12 bg-white">
  //       <div className="max-w-7xl mx-auto px-4">
  //         <div className="text-center">Loading hackathons...</div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <i className="fas fa-trophy text-2xl text-[#e74c3c]" />
            <h2 className="text-3xl font-bold">Recent Hackathons</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
          <p className="text-gray-600 text-base">
            Join our coding competitions, collaborate with the community, and win
            amazing prizes!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {displayHackathons.map((h: any, index) => (
            <HackathonCard
              key={index}
              title={h.title}
              organizer={h.organizer_name ?? String(h.organizer)}
              organizerLink={h.organizer_link ?? h.organizerLink}
              description={h.description}
              startDate={h.start_date ?? h.startDate}
              endDate={h.end_date ?? h.endDate}
              status={h.status}
              href={h.href}
            />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-[#e74c3c] text-[#e74c3c] rounded-lg hover:bg-[#e74c3c] hover:text-white font-medium transition-colors duration-200"
          >
            View All Hackathons
            <i className="fas fa-arrow-right ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}


