'use client';

import React, { useState } from 'react';

// Type definitions
interface SubMenuItem {
    label: string;
    href: string;
    icon?: string;
    isExternal?: boolean;
}

interface MenuItem {
    label: string;
    href?: string;
    icon: string;
    section?: string;
    submenu?: SubMenuItem[];
    isExternal?: boolean;
    target?: string;
}

interface MenuSection {
    title: string;
    items: MenuItem[];
}

interface SideNavProps {
    isOpen: boolean;
    onClose: () => void;
    isDarkMode?: boolean;
    currentPath?: string;
}

const MENU_SECTIONS: MenuSection[] = [
    {
        title: 'ORGANIZATIONS',
        items: [
            {
                label: 'Organizations',
                href: '/organizations/',
                icon: 'fas fa-home',
                submenu: [
                    { label: 'Register Organization', href: '/organization/register/' },
                    { label: 'Domains', href: '/domains/' },
                    { label: 'Map', href: '/map/' },
                    { label: 'Feed', href: '/feed/' },
                    { label: 'Hackathons', href: '/hackathons/' },
                    { label: 'Jobs', href: '/jobs/' },
                    { label: 'Issues', href: '/issues/' },
                    { label: 'GitHub Issues', href: '/github-issues/' },
                    { label: 'Sizzle', href: '/sizzle/' },
                    { label: 'Check In', href: '/checkin/' },
                    { label: 'Scoreboard', href: '/scoreboard/' },
                    { label: 'Hunts', href: '/hunts/' },
                    { label: 'Reported IPs', href: '/reported-ips/' },
                    { label: 'Trademark Search', href: '/trademark-search/' },
                ],
            },
        ],
    },
    {
        title: 'PROJECTS',
        items: [
            {
                label: 'Projects',
                href: '/projects/',
                icon: 'fas fa-folder-open',
                submenu: [
                    { label: 'Repositories', href: '/repositories/' },
                    { label: 'Bidding Data', href: '/bidding-data/' },
                    { label: 'BLT Tomato', href: '/blt-tomato/' },
                    { label: 'BACON', href: '/bacon/' },
                    { label: 'BACON Requests', href: '/bacon-requests/' },
                    { label: 'GSOC PR Report', href: '/gsoc-pr-report/' },
                ],
            },
        ],
    },
    {
        title: 'USERS',
        items: [
            {
                label: 'Users',
                href: '/users/',
                icon: 'fas fa-users',
                submenu: [
                    { label: 'Messages', href: '/messages/' },
                    { label: 'Challenges', href: '/challenges/' },
                    { label: 'Staking', href: '/staking/' },
                    { label: 'Leaderboard', href: '/leaderboard/' },
                    { label: 'Contributors', href: '/contributors/' },
                    { label: 'Deletions', href: '/deletions/' },
                    { label: 'Badges', href: '/badges/' },
                    { label: 'Adventures', href: '/adventures/' },
                    { label: 'Reminders', href: '/reminders/' },
                ],
            },
        ],
    },
    {
        title: 'TEAMS',
        items: [
            {
                label: 'Teams',
                href: '/teams/',
                icon: 'fas fa-people-group',
                submenu: [
                    { label: 'Team Challenges', href: '/team-challenges/' },
                    { label: 'Team Leaderboard', href: '/team-leaderboard/' },
                ],
            },
        ],
    },
    {
        title: 'ABOUT US',
        items: [
            {
                label: 'About',
                href: '/about/',
                icon: 'fas fa-circle-info',
                submenu: [
                    { label: 'Features', href: '/features/' },
                    { label: 'Sponsor', href: '/sponsor/' },
                    { label: 'OWASP Project', href: 'https://owasp.org/www-project-bug-logging-tool/', isExternal: true },
                    { label: 'Donate', href: '/donate/' },
                    { label: 'Forum', href: '/forum/' },
                ],
            },
        ],
    },
    {
        title: 'CONTRIBUTE',
        items: [
            {
                label: 'Contribution Guidelines',
                href: '/contribution-guidelines/',
                icon: 'fas fa-bolt',
                submenu: [
                    { label: 'Contributing', href: 'https://github.com/OWASP-BLT/BLT/blob/main/CONTRIBUTING.md', isExternal: true },
                    { label: 'API Docs', href: 'https://blt.owasp.org/swagger/', isExternal: true },
                    { label: 'Education', href: '/education/' },
                    { label: 'Simulation', href: '/simulation/' },
                    { label: 'OSSH', href: '/ossh/' },
                    { label: 'GSOC', href: '/gsoc/' },
                    { label: 'Roadmap', href: '/roadmap/' },
                    { label: 'Submit PR', href: '/submit-roadmap/' },
                    { label: 'GitHub Issue', href: '/github-issue-prompt/' },
                ],
            },
        ],
    },
    {
        title: 'GITHUB',
        items: [
            {
                label: 'GitHub',
                href: 'https://github.com/OWASP-BLT/BLT',
                icon: 'fab fa-github',
                isExternal: true,
                submenu: [
                    { label: 'BLT Repository', href: 'https://github.com/OWASP-BLT/BLT/', isExternal: true },
                    { label: 'BLT Flutter', href: 'https://github.com/OWASP-BLT/BLT-Flutter', isExternal: true },
                    { label: 'BLT Extension', href: 'https://github.com/OWASP-BLT/BLT-Extension', isExternal: true },
                    { label: 'BLT Action', href: 'https://github.com/OWASP-BLT/BLT-Action', isExternal: true },
                    { label: 'BLT Bacon', href: 'https://github.com/OWASP-BLT/BLT-Bacon', isExternal: true },
                    { label: 'BLT Lettuce', href: 'https://github.com/OWASP-BLT/BLT-Lettuce', isExternal: true },
                ],
            },
        ],
    },
    {
        title: 'COMMUNICATION',
        items: [
            {
                label: 'Similarity Scan',
                href: '/similarity-scan/',
                icon: 'fas fa-magnifying-glass',
            },
            {
                label: 'Chat Rooms',
                href: '/rooms/',
                icon: 'fas fa-comments',
            },
            {
                label: 'Video Call',
                href: '/video-call/',
                icon: 'fas fa-video',
            },
            {
                label: 'Banned Apps',
                href: '/banned-apps/',
                icon: 'fas fa-ban',
            },
        ],
    },
    {
        title: 'APPS',
        items: [
            {
                label: 'iOS App',
                href: 'https://apps.apple.com/us/app/owasp-blt/id6448071954',
                icon: 'fab fa-app-store',
                isExternal: true,
            },
            {
                label: 'Extension',
                href: '/extension/',
                icon: 'fas fa-puzzle-piece',
            },
        ],
    },
    {
        title: 'SOCIAL LINKS',
        items: [
            {
                label: 'Twitter',
                href: 'https://x.com/owasp_blt',
                icon: 'fab fa-x-twitter',
                isExternal: true,
            },
            {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/owaspfoundation/',
                icon: 'fab fa-facebook',
                isExternal: true,
            },
            {
                label: 'Blog',
                href: '/blog/',
                icon: 'fas fa-file-lines',
            },
            {
                label: 'Slack',
                href: 'https://owasp.org/slack/invite',
                icon: 'fab fa-slack',
                isExternal: true,
            },
        ],
    },
    {
        title: 'SITE INFO',
        items: [
            {
                label: 'Sitemap',
                href: '/sitemap/',
                icon: 'fas fa-sitemap',
            },
            {
                label: 'Status',
                href: '/status/',
                icon: 'fas fa-heartbeat',
            },
            {
                label: 'Statistics',
                href: '/stats/',
                icon: 'fas fa-chart-bar',
            },
            {
                label: 'Stats Dashboard',
                href: '/stats-dashboard/',
                icon: 'fas fa-gauge',
            },
            {
                label: 'Templates',
                href: '/template-list/',
                icon: 'fas fa-file-code',
            },
            {
                label: 'Website Stats',
                href: '/website-stats/',
                icon: 'fas fa-chart-line',
            },
        ],
    },
    {
        title: 'LEGAL',
        items: [
            {
                label: 'Terms & Conditions',
                href: '/terms/',
                icon: 'fas fa-lock',
            },
        ],
    },
    {
        title: 'RESOURCES',
        items: [
            {
                label: 'Design',
                href: 'https://www.figma.com/file/2lfEZKvqcb4WxRPYEwJqeE/OWASP-BLT',
                icon: 'fas fa-pen-nib',
                isExternal: true,
            },
            {
                label: 'Style Guide',
                href: '/style-guide/',
                icon: 'fas fa-palette',
            },
        ],
    },
];

// Menu section component
const MenuSectionComponent: React.FC<{
    section: MenuSection;
    currentPath?: string;
}> = ({ section, currentPath }) => {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    return (
        <div className="mb-8">
            <div className="px-2 py-2">
                <span className="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">
                    {section.title}
                </span>
            </div>
            {section.items.map((item, index) => (
                <div key={index}>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            if (item.submenu) {
                                setExpandedItem(expandedItem === item.label ? null : item.label);
                            }
                        }}
                        className={`w-full group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-all duration-200 ${currentPath?.includes(item.href || '')
                            ? 'bg-[#feeae9] text-[#e74c3c]'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c]'
                            }`}
                    >
                        <div
                            className={`mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${currentPath?.includes(item.href || '')
                                ? 'bg-[#fde0dd] text-[#e74c3c]'
                                : 'bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c]'
                                }`}
                        >
                            <i className={item.icon} />
                        </div>
                        <span className="truncate flex-grow">{item.label}</span>
                        {item.submenu && (
                            <i className={`fas fa-chevron-down transition-transform duration-200 ${expandedItem === item.label ? 'rotate-180' : ''}`} />
                        )}
                    </button>

                    {/* Submenu */}
                    {item.submenu && expandedItem === item.label && (
                        <div className="ml-8 mt-1 space-y-1">
                            {item.submenu.map((subitem, subindex) => (
                                <button
                                    key={subindex}
                                    type="button"
                                    onClick={(e) => e.preventDefault()}
                                    className={`w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-200 ${currentPath?.includes(subitem.href)
                                        ? 'bg-[#feeae9] text-[#e74c3c]'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#e74c3c]'
                                        }`}
                                >
                                    <span className="truncate">{subitem.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// Main SideNav component
export const SideNav: React.FC<SideNavProps> = ({
    isOpen,
    onClose,
    isDarkMode = false,
    currentPath = '/',
}) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {/* Mobile backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[9999] md:hidden"
                    onClick={handleBackdropClick}
                />
            )}

            {/* Sidebar */}
            <div
                className={`sidebar fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-300 transform transition-all duration-300 ease-in-out z-[10000] w-full max-w-[350px] min-w-[280px] max-[360px]:max-w-[90vw] max-[360px]:min-w-[240px] shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-full flex flex-col justify-between overflow-hidden">
                    {/* Main navigation */}
                    <div className="overflow-y-auto flex-grow py-2 scrollbar-none">
                        <nav className="px-2 space-y-2 mb-8 mt-2">
                            {MENU_SECTIONS.map((section, index) => (
                                <MenuSectionComponent
                                    key={index}
                                    section={section}
                                    currentPath={currentPath}
                                />
                            ))}
                        </nav>
                    </div>

                    {/* Footer - Dark mode toggle */}
                    <div className="sticky bottom-0 bg-white border-t border-gray-300 p-4 w-full z-[10001] md:hidden">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium text-gray-700">
                                Theme
                            </span>
                            <button
                                className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 transition-colors"
                                onClick={() => {
                                    // Toggle dark mode logic here
                                }}
                            >
                                <span
                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-7' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideNav;
