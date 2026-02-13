'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
    currentPath?: string;
}

interface DashboardItem {
    label: string;
    href: string;
    icon: string;
    matchPaths?: string[];
}

// Dashboard items for organization pages
const DASHBOARD_ITEMS: DashboardItem[] = [
    {
        label: 'Analytics',
        href: '/organization/{id}/analytics/',
        icon: 'fas fa-chart-line',
        matchPaths: ['organization_analytics']
    },
    {
        label: 'Team Overview',
        href: '/organization/{id}/team-overview/',
        icon: 'fas fa-users',
        matchPaths: ['organization_team_overview']
    },
    {
        label: 'Bugs',
        href: '/organization/{id}/bugs/',
        icon: 'fas fa-bug',
        matchPaths: ['organization_manage_bugs']
    },
    {
        label: 'Domains',
        href: '/organization/{id}/domains/',
        icon: 'fas fa-globe',
        matchPaths: ['organization_manage_domains']
    },
    {
        label: 'Bug Bounties',
        href: '/organization/{id}/bughunts/',
        icon: 'fas fa-trophy',
        matchPaths: ['organization_manage_bughunts']
    },
    {
        label: 'Roles',
        href: '/organization/{id}/roles/',
        icon: 'fas fa-user-tag',
        matchPaths: ['organization_manage_roles']
    },
    {
        label: 'Integrations',
        href: '/organization/{id}/integrations/',
        icon: 'fas fa-puzzle-piece',
        matchPaths: ['organization_manage_integrations']
    },
    {
        label: 'Manage Jobs',
        href: '/organization/{id}/jobs/',
        icon: 'fas fa-briefcase',
        matchPaths: ['organization_manage_jobs', 'create_job', 'edit_job']
    },
    {
        label: 'Slack Channels',
        href: '/slack-channels/',
        icon: 'fab fa-slack',
        matchPaths: ['slack_channels_list']
    },
];

const MENU_SECTIONS: MenuSection[] = [
    {
        title: 'ORGANIZATIONS',
        items: [
            {
                label: 'Organizations',
                href: '/organizations/',
                icon: 'fas fa-building',
                submenu: [
                    { label: 'Register Organization', href: '/organization/register/', icon: 'fas fa-plus' },
                    { label: 'Domains', href: '/domains/', icon: 'fas fa-globe' },
                    { label: 'Map', href: '/map/', icon: 'fas fa-location-dot' },
                    { label: 'Feed', href: '/feed/', icon: 'fas fa-rss' },
                    { label: 'Hackathons', href: '/hackathon/', icon: 'fas fa-trophy' },
                    { label: 'Jobs', href: '/jobs/', icon: 'fas fa-briefcase' },
                    { label: 'Bugs', href: '/issues/', icon: 'fas fa-bug' },
                    { label: 'Issues', href: '/github-issues/', icon: 'fab fa-github' },
                    { label: 'Time Logs', href: '/sizzle/', icon: 'fas fa-fire' },
                    { label: 'Check-In', href: '/checkin/', icon: 'fas fa-user-check' },
                    { label: 'Scoreboard', href: '/scoreboard/', icon: 'fas fa-trophy' },
                    { label: 'Bounties', href: '/hunts/', icon: 'fas fa-search' },
                    { label: 'Reported IPs', href: '/reported-ips/', icon: 'fas fa-exclamation-triangle' },
                    { label: 'Trademarks', href: '/trademark-search/', icon: 'fas fa-registered' },
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
                icon: 'fas fa-box',
                submenu: [
                    { label: 'Repositories', href: '/repo-list/', icon: 'fab fa-github' },
                    { label: 'Bid on Issues', href: '/bidding/', icon: 'fas fa-money-bill-trend-up' },
                    { label: 'Funding', href: '/blt-tomato/', icon: 'fas fa-seedling' },
                    { label: 'BACON (coin)', href: '/bacon/', icon: 'fas fa-coins' },
                    { label: 'Bacon Requests', href: '/bacon-requests/', icon: 'fas fa-hands-helping' },
                    { label: 'GSOC PR Reports', href: '/gsoc/pr-report/', icon: 'fas fa-code-pull-request' },
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
                icon: 'fas fa-user-group',
                submenu: [
                    { label: 'Messaging', href: '/messaging/', icon: 'fas fa-envelope' },
                    { label: 'Challenges', href: '/user-challenges/', icon: 'fas fa-flag-checkered' },
                    { label: 'Staking', href: '/staking/', icon: 'fas fa-coins' },
                    { label: 'Leaderboard', href: '/leaderboards/', icon: 'fas fa-medal' },
                    { label: 'Contributors', href: '/contributors/', icon: 'fas fa-laptop-code' },
                    { label: 'Takedowns', href: '/deletions/', icon: 'fas fa-trash-can' },
                    { label: 'Badges', href: '/badges/', icon: 'fas fa-certificate' },
                    { label: 'Adventures', href: '/adventures/', icon: 'fas fa-rocket' },
                    { label: 'Reminder Settings', href: '/reminder-settings/', icon: 'fas fa-bell' },
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
                icon: 'fas fa-users',
                submenu: [
                    { label: 'Challenges', href: '/team-challenges/', icon: 'fas fa-flag-checkered' },
                    { label: 'Leaderboard', href: '/team-leaderboard/', icon: 'fas fa-medal' },
                ],
            },
        ],
    },
    {
        title: 'ABOUT US',
        items: [
            {
                label: 'About Us',
                href: '/about/',
                icon: 'fas fa-info-circle',
                submenu: [
                    { label: 'Features', href: '/features/', icon: 'fas fa-gear' },
                    { label: 'Sponsorships', href: '/sponsor/', icon: 'fas fa-handshake' },
                    { label: 'OWASP Project', href: 'https://owasp.org/www-project-bug-logging-tool/', icon: 'fas fa-shield-halved', isExternal: true },
                    { label: 'Donations', href: '/donate/', icon: 'fas fa-donate' },
                    { label: 'Forum', href: '/forum/', icon: 'fas fa-comments' },
                ],
            },
        ],
    },
    {
        title: 'CONTRIBUTE',
        items: [
            {
                label: 'Contribute',
                href: '/contribute/',
                icon: 'fas fa-hands-helping',
                submenu: [
                    { label: 'Documentation', href: 'https://github.com/OWASP-BLT/BLT/blob/main/CONTRIBUTING.md', icon: 'fas fa-book', isExternal: true },
                    { label: 'Developer API', href: 'https://blt.owasp.org/swagger/', icon: 'fas fa-cogs', isExternal: true },
                    { label: 'Education', href: '/education/', icon: 'fas fa-tv' },
                    { label: 'Security Labs', href: '/simulation/', icon: 'fas fa-flask' },
                    { label: 'Open Source Sorting Hat', href: '/ossh/', icon: 'fas fa-hat-wizard' },
                    { label: 'GSOC', href: '/gsoc/', icon: 'fas fa-sun' },
                    { label: 'Roadmap', href: '/roadmap/', icon: 'fas fa-road' },
                    { label: 'Submit PR for review', href: '/submit-roadmap/', icon: 'fas fa-code-branch' },
                    { label: 'Create an Issue', href: '/github-issue-prompt/', icon: 'fas fa-plus-circle' },
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
                    { label: 'BLT Core', href: 'https://github.com/OWASP-BLT/BLT/', icon: 'fas fa-code-branch', isExternal: true },
                    { label: 'BLT Flutter', href: 'https://github.com/OWASP-BLT/BLT-Flutter', icon: 'fas fa-mobile-screen-button', isExternal: true },
                    { label: 'BLT Extension', href: 'https://github.com/OWASP-BLT/BLT-Extension', icon: 'fas fa-puzzle-piece', isExternal: true },
                    { label: 'BLT Action', href: 'https://github.com/OWASP-BLT/BLT-Action', icon: 'fas fa-play-circle', isExternal: true },
                    { label: 'BLT BACON', href: 'https://github.com/OWASP-BLT/BLT-Bacon', icon: 'fas fa-coins', isExternal: true },
                    { label: 'BLT Lettuce', href: 'https://github.com/OWASP-BLT/BLT-Lettuce', icon: 'fas fa-leaf', isExternal: true },
                ],
            },
        ],
    },
    {
        title: 'COMMUNICATION',
        items: [
            {
                label: 'SimilarityScan',
                href: '/similarity-scan/',
                icon: 'fas fa-clone',
            },
            {
                label: 'Rooms',
                href: '/rooms/',
                icon: 'fas fa-door-open',
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
                label: 'iPhone App',
                href: 'https://apps.apple.com/us/app/owasp-blt/id6448071954',
                icon: 'fab fa-apple',
                isExternal: true,
            },
            {
                label: 'Chrome Extension',
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
                icon: 'fab fa-twitter',
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
                icon: 'fas fa-blog',
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
                icon: 'fas fa-check-circle',
            },
            {
                label: 'Stats',
                href: '/stats/',
                icon: 'fas fa-chart-line',
            },
            {
                label: 'Stats Dashboard',
                href: '/stats-dashboard/',
                icon: 'fas fa-chart-bar',
            },
            {
                label: 'Template List',
                href: '/template-list/',
                icon: 'fas fa-list',
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
                label: 'Terms',
                href: '/terms/',
                icon: 'fas fa-file-contract',
            },
        ],
    },
];

// Menu section component
const MenuSectionComponent: React.FC<{
    section: MenuSection;
    currentPath: string;
}> = ({ section, currentPath }) => {

    const isActive = (href?: string) => {
        if (!href) return false;
        return currentPath === href || currentPath.startsWith(href);
    };

    return (
        <div className="mb-6">
            <div className="px-2 py-2">
                <span className="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">
                    {section.title}
                </span>
            </div>
            {section.items.map((item, index) => (
                <div key={index}>
                    {item.href ? (
                        <Link
                            href={item.href}
                            target={item.isExternal ? '_blank' : undefined}
                            rel={item.isExternal ? 'noopener noreferrer' : undefined}
                            className={`w-full group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-all duration-200 ${isActive(item.href)
                                ? 'bg-[#feeae9] text-[#e74c3c]'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c]'
                                }`}
                        >
                            <div
                                className={`mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${isActive(item.href)
                                    ? 'bg-[#fde0dd] text-[#e74c3c]'
                                    : 'bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c]'
                                    }`}
                            >
                                <i className={item.icon} />
                            </div>
                            <span className="truncate flex-grow">{item.label}</span>
                        </Link>
                    ) : (
                        <div
                            className={`w-full group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-all duration-200 ${isActive(item.href)
                                ? 'bg-[#feeae9] text-[#e74c3c]'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c]'
                                }`}
                        >
                            <div
                                className={`mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${isActive(item.href)
                                    ? 'bg-[#fde0dd] text-[#e74c3c]'
                                    : 'bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c]'
                                    }`}
                            >
                                <i className={item.icon} />
                            </div>
                            <span className="truncate flex-grow">{item.label}</span>
                        </div>
                    )}

                    {/* Submenu */}
                    {item.submenu && (
                        <div className="ml-8 mt-1 space-y-1">
                            {item.submenu.map((subitem, subindex) => (
                                <Link
                                    key={subindex}
                                    href={subitem.href}
                                    target={subitem.isExternal ? '_blank' : undefined}
                                    rel={subitem.isExternal ? 'noopener noreferrer' : undefined}
                                    className={`w-full group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-all duration-200 ${isActive(subitem.href)
                                        ? 'bg-[#feeae9] text-[#e74c3c]'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c]'
                                        }`}
                                >
                                    {subitem.icon && (
                                        <div
                                            className={`mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center ${isActive(subitem.href)
                                                ? 'text-[#e74c3c]'
                                                : 'text-gray-500 group-hover:text-[#e74c3c]'
                                                } transition-all duration-200`}
                                        >
                                            <i className={subitem.icon} />
                                        </div>
                                    )}
                                    <span className="truncate">{subitem.label}</span>
                                </Link>
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
    currentPath: propCurrentPath,
}) => {
    const pathname = usePathname();
    const currentPath = propCurrentPath || pathname || '/';
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    // Check if we're on an organization page
    const isOrganizationPage = currentPath.includes('/organization/');
    const organizationId = isOrganizationPage ? currentPath.split('/')[2] : null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value);
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
                            {/* Dashboard Section - Only show on organization pages */}
                            {isOrganizationPage && organizationId && (
                                <div className="mb-6">
                                    <div className="px-2 py-2">
                                        <span className="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">
                                            Dashboard
                                        </span>
                                    </div>
                                    {DASHBOARD_ITEMS.map((item, index) => {
                                        const href = item.href.replace('{id}', organizationId);
                                        const isActive = currentPath === href || item.matchPaths?.some(path => currentPath.includes(path));

                                        return (
                                            <Link
                                                key={index}
                                                href={href}
                                                className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-all duration-200 ${isActive
                                                    ? 'bg-[#feeae9] text-[#e74c3c]'
                                                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c]'
                                                    }`}
                                            >
                                                <div
                                                    className={`mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${isActive
                                                        ? 'bg-[#fde0dd] text-[#e74c3c]'
                                                        : 'bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c]'
                                                        }`}
                                                >
                                                    <i className={item.icon} />
                                                </div>
                                                <span className="truncate">{item.label}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Main Menu Sections */}
                            {MENU_SECTIONS.map((section, index) => (
                                <MenuSectionComponent
                                    key={index}
                                    section={section}
                                    currentPath={currentPath}
                                />
                            ))}

                            {/* Language Selector */}
                            <div className="mb-6">
                                <div className="px-2 py-2">
                                    <span className="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">
                                        Language
                                    </span>
                                </div>
                                <div className="px-2">
                                    <div className="relative mt-1">
                                        <div className="flex items-center">
                                            <i className="fas fa-earth-americas mr-3 text-[#e74c3c]" />
                                            <select
                                                value={selectedLanguage}
                                                onChange={handleLanguageChange}
                                                className="appearance-none w-full pl-2 pr-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#e74c3c] focus:border-[#e74c3c]"
                                            >
                                                <option value="en">English</option>
                                                <option value="fr">French</option>
                                                <option value="zh-cn">Chinese</option>
                                                <option value="de">German</option>
                                                <option value="ja">Japanese</option>
                                                <option value="ru">Russian</option>
                                                <option value="hi">Hindi</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                                <i className="fas fa-chevron-down text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Resources Section */}
                            <div className="mb-6">
                                <div className="px-2 py-2">
                                    <span className="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">
                                        Resources
                                    </span>
                                </div>
                                <Link
                                    href="https://www.figma.com/file/2lfEZKvqcb4WxRPYEwJqeE/OWASP-BLT?type=design&node-id=0%3A1&mode=design&t=Hy0GZXlVxBPHQMxr-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200"
                                >
                                    <div className="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                        <i className="fab fa-figma" />
                                    </div>
                                    <span className="truncate">Design</span>
                                </Link>
                                <Link
                                    href="/style-guide/"
                                    className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-all duration-200 ${currentPath === '/style-guide/' || currentPath.includes('/style-guide/')
                                        ? 'bg-[#feeae9] text-[#e74c3c]'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c]'
                                        }`}
                                >
                                    <div
                                        className={`mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${currentPath === '/style-guide/' || currentPath.includes('/style-guide/')
                                            ? 'bg-[#fde0dd] text-[#e74c3c]'
                                            : 'bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c]'
                                            }`}
                                    >
                                        <i className="fas fa-palette" />
                                    </div>
                                    <span className="truncate">Style Guide</span>
                                </Link>
                                <Link
                                    href="https://github.com/OWASP-BLT/BLT/blob/main/website/templates/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200"
                                >
                                    <div className="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                        <i className="fas fa-pen-to-square" />
                                    </div>
                                    <span className="truncate">Edit this page</span>
                                </Link>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SideNav;
