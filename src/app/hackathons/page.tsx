import HackathonsSection from "@/components/hackathons/hackathons-section";

export default function HackathonsPage() {
  // In a real app, you'd fetch hackathons from an API
  const hackathons = [
    {
      title: "Security Hackathon 2024",
      organizer: "OWASP",
      organizerLink: "/organizations/owasp",
      description:
        "Join us for an exciting security hackathon where you can compete with other security researchers and win amazing prizes!",
      startDate: "Feb 01, 2026",
      endDate: "Feb 28, 2026",
      status: "active" as const,
      href: "/hackathons/security-hackathon-2024",
    },
    {
      title: "Web Security Challenge",
      organizer: "BLT Community",
      organizerLink: "/organizations/blt-community",
      description:
        "Test your web security skills in this comprehensive challenge covering various vulnerability types and exploitation techniques.",
      startDate: "Dec 01, 2024",
      endDate: "Dec 15, 2024",
      status: "upcoming" as const,
      href: "/hackathons/web-security-challenge",
    },
  ];
  return (
    <div className="relative pt-24 mt-4">
      <HackathonsSection hackathons={hackathons} />
    </div>
  );
}

