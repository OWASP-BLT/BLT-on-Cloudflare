"use client";

import Link from "next/link";
import { RefObject } from "react";

const languageOptions = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "zh-cn", label: "Chinese" },
    { value: "de", label: "German" },
    { value: "ja", label: "Japanese" },
    { value: "ru", label: "Russian" },
    { value: "hi", label: "Hindi" },
];

export type NavItem = {
    label: string;
    href: string;
    icon: string;
    external?: boolean;
};

export type NavSection = {
    title: string;
    items: NavItem[];
};

export type MegaColumn = {
    sections: NavSection[];
};

const megaColumns: MegaColumn[] = [
    {
        sections: [
            {
                title: "Organizations",
                items: [
                    { label: "Organizations", href: "/organizations/", icon: "fas fa-building" },
                    { label: "Register Organization", href: "/organization/", icon: "fas fa-plus" },
                    { label: "Domains", href: "/domains/", icon: "fas fa-globe" },
                    { label: "Map", href: "/map/", icon: "fas fa-map-marker-alt" },
                    { label: "Feed", href: "/feed/", icon: "fas fa-rss" },
                    { label: "Hackathons", href: "/hackathons/", icon: "fas fa-trophy" },
                    { label: "Jobs", href: "/jobs/", icon: "fas fa-briefcase" },
                    { label: "Bugs", href: "/issues/", icon: "fas fa-bug" },
                    { label: "Issues", href: "/github-issues/", icon: "fas fa-bug" },
                    { label: "Time Logs", href: "/sizzle/", icon: "fas fa-fire" },
                    { label: "Check-In", href: "/check-in/", icon: "fas fa-user-check" },
                    { label: "Scoreboard", href: "/scoreboard/", icon: "fas fa-trophy" },
                    { label: "Bounties", href: "/bounties/", icon: "fas fa-bug" },
                    { label: "Reported IPs", href: "/reported-ips/", icon: "fas fa-exclamation-triangle" },
                    { label: "Trademarks", href: "/trademarks/", icon: "fas fa-registered" },
                ],
            },
            {
                title: "Communication",
                items: [
                    { label: "SimilarityScan", href: "/similarity_scan/", icon: "fas fa-clone" },
                    { label: "Rooms", href: "/discussion-rooms/", icon: "fas fa-door-open" },
                    { label: "Video Call", href: "/video_call/", icon: "fas fa-video" },
                    { label: "Banned Apps", href: "/banned_apps/", icon: "fas fa-ban" },
                ],
            },
        ],
    },
    {
        sections: [
            {
                title: "Projects",
                items: [
                    { label: "Projects", href: "/projects/", icon: "fas fa-box" },
                    { label: "Repositories", href: "/repo_list/", icon: "fab fa-github" },
                    { label: "Bid on Issues", href: "/bidding/", icon: "fas fa-money-bill-wave" },
                    { label: "Funding", href: "/blt-tomato/", icon: "fas fa-seedling" },
                    { label: "BACON (coin)", href: "/bacon/", icon: "fas fa-coins" },
                    { label: "Bacon Requests", href: "/bacon-requests/", icon: "fas fa-hands-helping" },
                    { label: "GSOC PR Reports", href: "/gsoc/pr-report/", icon: "fas fa-code-pull-request" },
                ],
            },
            {
                title: "Users",
                items: [
                    { label: "Users", href: "/users/", icon: "fas fa-user-friends" },
                    { label: "Messaging", href: "/messaging/", icon: "fas fa-envelope" },
                    { label: "Challenges", href: "/user_challenges/", icon: "fas fa-flag-checkered" },
                    { label: "Staking", href: "/staking/", icon: "fas fa-coins" },
                    { label: "Leaderboard", href: "/leaderboard/", icon: "fas fa-medal" },
                    { label: "Contributors", href: "/contributors/", icon: "fas fa-laptop-code" },
                    { label: "Takedowns", href: "/deletions/", icon: "fas fa-trash-alt" },
                    { label: "Badges", href: "/badges/", icon: "fas fa-certificate" },
                    { label: "Adventures", href: "/adventures/", icon: "fas fa-rocket" },
                    { label: "Reminder Settings", href: "/reminder-settings/", icon: "fas fa-bell" },
                ],
            },
        ],
    },
    {
        sections: [
            {
                title: "Teams",
                items: [
                    { label: "Teams", href: "/teams/overview/", icon: "fas fa-users" },
                    { label: "Team Challenges", href: "/teams/challenges/", icon: "fas fa-flag-checkered" },
                    { label: "Team Leaderboard", href: "/teams/leaderboard/", icon: "fas fa-medal" },
                ],
            },
            {
                title: "About Us",
                items: [
                    { label: "About Us", href: "/about/", icon: "fas fa-info-circle" },
                    { label: "Features", href: "/features/", icon: "fa-solid fa-gear" },
                    { label: "Sponsorships", href: "/sponsor/", icon: "fas fa-handshake" },
                    { label: "OWASP Project", href: "https://owasp.org/www-project-bug-logging-tool/", icon: "fas fa-shield-alt", external: true },
                    { label: "Donations", href: "/donate/", icon: "fas fa-donate" },
                    { label: "Forum", href: "/forum/", icon: "fas fa-comments" },
                ],
            },
            {
                title: "Resources",
                items: [
                    { label: "Design", href: "https://www.figma.com/file/2lfEZKvqcb4WxRPYEwJqeE/OWASP-BLT?type=design&node-id=0%3A1&mode=design&t=Hy0GZXlVxBPHQMxr-1", icon: "fab fa-figma", external: true },
                    { label: "Style Guide", href: "/style-guide/", icon: "fas fa-palette" },
                    { label: "Edit this page", href: "https://github.com/OWASP-BLT/BLT/blob/main/website/templates/", icon: "fas fa-edit", external: true },
                ],
            },
        ],
    },
    {
        sections: [
            {
                title: "Contribute",
                items: [
                    { label: "Contribute", href: "/contribute/", icon: "fas fa-hands-helping" },
                    { label: "Documentation", href: "https://github.com/OWASP/BLT/blob/main/Setup.md", icon: "fas fa-book", external: true },
                    { label: "Developer API", href: "https://blt.owasp.org/swagger/", icon: "fas fa-cogs", external: true },
                    { label: "Education", href: "/education/", icon: "fas fa-tv" },
                    { label: "Security Labs", href: "/simulation/", icon: "fas fa-flask" },
                    { label: "Open Source Sorting Hat", href: "/open-source-sorting-hat/", icon: "fas fa-hat-wizard" },
                    { label: "GSOC", href: "/gsoc/", icon: "fas fa-sun" },
                    { label: "Roadmap", href: "/roadmap/", icon: "fas fa-road" },
                    { label: "Submit PR for review", href: "/submit-roadmap-pr/", icon: "fas fa-code-branch" },
                    { label: "Create an Issue", href: "/github-issue-prompt/", icon: "fas fa-code-branch" },
                ],
            },
            {
                title: "GitHub",
                items: [
                    { label: "GitHub", href: "https://github.com/OWASP/BLT", icon: "fab fa-github", external: true },
                    { label: "BLT Core", href: "https://github.com/OWASP-BLT/BLT/", icon: "fas fa-code-branch", external: true },
                    { label: "BLT Flutter", href: "https://github.com/OWASP-BLT/BLT-Flutter", icon: "fas fa-mobile-alt", external: true },
                    { label: "BLT Extension", href: "https://github.com/OWASP-BLT/BLT-Extension", icon: "fas fa-puzzle-piece", external: true },
                    { label: "BLT Action", href: "https://github.com/OWASP-BLT/BLT-Action", icon: "fas fa-play-circle", external: true },
                    { label: "BLT BACON", href: "https://github.com/OWASP-BLT/BLT-Bacon", icon: "fas fa-coins", external: true },
                    { label: "BLT Lettuce", href: "https://github.com/OWASP-BLT/BLT-Lettuce", icon: "fas fa-leaf", external: true },
                ],
            },
        ],
    },
    {
        sections: [
            {
                title: "Apps",
                items: [
                    { label: "iPhone App", href: "https://apps.apple.com/us/app/owasp-blt/id6448071954", icon: "fab fa-apple", external: true },
                    { label: "Chrome Extension", href: "/extension/", icon: "fas fa-puzzle-piece" },
                ],
            },
            {
                title: "Social Links",
                items: [
                    { label: "Twitter", href: "https://x.com/owasp_blt", icon: "fab fa-x-twitter", external: true },
                    { label: "Facebook", href: "https://www.facebook.com/groups/owaspfoundation/", icon: "fab fa-facebook", external: true },
                    { label: "Blog", href: "/blog/", icon: "fas fa-blog" },
                    { label: "Slack", href: "https://owasp.org/slack/invite", icon: "fab fa-slack", external: true },
                ],
            },
            {
                title: "Site Info",
                items: [
                    { label: "Sitemap", href: "/sitemap/", icon: "fas fa-sitemap" },
                    { label: "Status", href: "/status_page/", icon: "fas fa-check-circle" },
                    { label: "Stats", href: "/stats/", icon: "fas fa-chart-line" },
                    { label: "Stats Dashboard", href: "/stats-dashboard/", icon: "fas fa-chart-bar" },
                    { label: "Template List", href: "/template_list/", icon: "fas fa-list" },
                    { label: "Website Stats", href: "/website_stats/", icon: "fas fa-chart-line" },
                    { label: "Terms", href: "/terms/", icon: "fas fa-file-contract" },
                ],
            },
        ],
    },
];

type MegaMenuButtonProps = {
    isOpen: boolean;
    onToggle: () => void;
    menuRef: RefObject<HTMLDivElement>;
    triggerRef: RefObject<HTMLButtonElement>;
};

function renderNavItem(item: NavItem) {
    return (
        <li key={item.label}>
            <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-colors text-gray-700 hover:text-[#e74c3c] hover:bg-gray-100 rounded px-2 py-1"
            >
                <i className={`${item.icon} w-5 mr-2 text-gray-500`} aria-hidden="true"></i>
                {item.label}
            </Link>
        </li>
    );
}

export default function MegaMenuButton({ isOpen, onToggle, menuRef, triggerRef }: MegaMenuButtonProps) {
    return (
        <>
            <button
                ref={triggerRef}
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls="mega-menu"
                aria-label="Open mega menu"
                type="button"
                className="hidden md:inline-flex group items-center gap-2 rounded-md p-2 text-[#e74c3c] border-2 border-[#e74c3c] hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e74c3c] focus:ring-offset-2"
            >
                <span className="sr-only">Open menu</span>
                <i className="fa fa-th-large md:text-xl text-lg" aria-hidden="true"></i>
            </button>

            {isOpen && (
                <div
                    id="mega-menu"
                    ref={menuRef}
                    className="mega-menu fixed top-[80px] left-0 right-0 bg-white shadow-lg border-b border-gray-200 max-h-[80vh] overflow-y-auto z-50 transition-colors duration-300"
                >
                    <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {megaColumns.map((column) => (
                                <div key={column.sections.map((s) => s.title).join("-")} className="flex flex-col gap-6">
                                    {column.sections.map((section) => (
                                        <div key={section.title}>
                                            <h3 className="text-sm font-semibold text-[#e74c3c] uppercase mb-4">{section.title}</h3>
                                            <ul className="space-y-2">{section.items.map(renderNavItem)}</ul>
                                            {section.title === "Users" && (
                                                <div className="mt-6">
                                                    <h3 className="text-sm font-semibold text-[#e74c3c] uppercase mb-4">Language</h3>
                                                    <div className="flex items-center">
                                                        <i className="fas fa-globe-americas w-5 mr-2 text-gray-700" aria-hidden="true"></i>
                                                        <select
                                                            className="form-select w-full text-gray-700 hover:text-[#e74c3c] bg-white border border-gray-300 rounded-md"
                                                            defaultValue="en"
                                                            onChange={() => { }}
                                                        >
                                                            {languageOptions.map((lang) => (
                                                                <option key={lang.value} value={lang.value}>
                                                                    {lang.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
