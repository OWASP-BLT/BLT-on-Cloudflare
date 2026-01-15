import LatestActivity from "@/components/activity/latest-activity";
import BlogPostsSection from "@/components/blog/blog-posts-section";
import Footer from "@/components/footer";
import HackathonsSection from "@/components/hackathons/hackathons-section";
import CallToAction from "@/components/home/call-to-action";
import CorporateSupporters from "@/components/home/corporate-supporters";
import FeaturesSection from "@/components/home/features-section";
import HeroSection from "@/components/home/hero-section";
import OrganizationCTA from "@/components/home/organization-cta";
import ProjectCards from "@/components/home/project-cards";
import ReferralProgram from "@/components/home/referral-program";
import BugsSection from "@/components/issues/bugs-section";
import LeaderboardSection from "@/components/leaderboard/leaderboard-section";
import OrganizationsTools from "@/components/organizations/organizations-tools";
import ProjectsTools from "@/components/projects/projects-tools";
import UsersTools from "@/components/users/users-tools";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <OrganizationCTA />
            <HackathonsSection />
            <LeaderboardSection />
            <ProjectCards />
            <ReferralProgram />
            {/* Decorative Divider */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center justify-center">
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                    <div className="mx-4">
                        <i className="fas fa-chart-line text-2xl text-[#e74c3c]" />
                    </div>
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </div>
            </div>
            <LatestActivity />
            <BugsSection />
            <BlogPostsSection />
            <OrganizationsTools />
            <ProjectsTools />
            <UsersTools />
            <CorporateSupporters />
            <CallToAction />
            <Footer />
        </>
    );
}


