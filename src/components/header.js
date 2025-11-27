/**
 * Header Component
 * Main navigation bar for the OWASP BLT application
 */

export const HEADER_TEMPLATE = `
    <nav class="fixed top-0 z-[9999] w-full bg-white/80 backdrop-blur-md border-zinc-200 border-b md:px-4 md:py-1.5 py-2 px-1">
        <div class="px-3 py-1 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex md:gap-4 gap-0 items-center justify-start rtl:justify-end">
                    <!-- Navigation Toggle Buttons -->
                    <div class="flex gap-2">
                        <!-- Sidebar Toggle -->
                        <button id="hamburger-button"
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                class="inline-flex items-center justify-center p-2 text-gray-500 border-2 border-gray-300 rounded-lg hover:bg-red-500 hover:text-white text-red-500 border-red-500">
                            <i class="fa fa-bars md:text-xl text-lg"></i>
                        </button>
                        <!-- Mega Menu Toggle -->
                        <button id="mega-menu-button"
                                aria-expanded="false"
                                aria-controls="mega-menu"
                                class="hidden md:inline-flex group items-center gap-2 rounded-md p-2 text-gray-500 border-2 border-gray-300 hover:bg-red-500 hover:text-white text-red-500 border-red-500">
                            <span class="sr-only">Open menu</span>
                            <i class="fa fa-th-large md:text-xl text-lg"></i>
                        </button>
                    </div>
                    <!-- Logo -->
                    <a href="/" class="flex select-none ms-4 md:me-24">
                        <img src="img/owasp-blt-logo.svg"
                             class="h-9 sm:h-10 md:h-10 lg:h-10 w-auto"
                             alt="OWASP BLT Logo"
                             width="50"
                             height="50" />
                    </a>
                    <!-- Mega Menu Content -->
                    <div id="mega-menu"
                         class="mega-menu hidden fixed top-[80px] left-0 right-0 bg-white shadow-lg border-b max-h-[80vh] overflow-y-auto z-50">
                        <div class="container mx-auto px-4 py-6">
                            <div class="grid grid-cols-5 gap-8">
                                <!-- Column 1: Organizations Part 1 -->
                                <div>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mb-4">Organizations</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/organizations"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-building w-5 mr-2"></i>Organizations</a>
                                        </li>
                                        <li>
                                            <a href="/register-organization"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-plus w-5 mr-2"></i> Register Organization</a>
                                        </li>
                                        <li>
                                            <a href="/domains"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-globe w-5 mr-2"></i>Domains</a>
                                        </li>
                                        <li>
                                            <a href="/map"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-map-marker-alt w-5 mr-2"></i>Map</a>
                                        </li>
                                        <li>
                                            <a href="/feed"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-rss w-5 mr-2"></i>Feed</a>
                                        </li>
                                        <li>
                                            <a href="/hackathons"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-trophy w-5 mr-2"></i>Hackathons</a>
                                        </li>
                                        <li>
                                            <a href="/issues"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-bug w-5 mr-2"></i>Bugs</a>
                                        </li>
                                        <li>
                                            <a href="/github-issues"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-bug w-5 mr-2"></i>Issues</a>
                                        </li>
                                        <li>
                                            <a href="/sizzle"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-fire w-5 mr-2"></i>Time Logs</a>
                                        </li>
                                        <li>
                                            <a href="/checkin"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-user-check w-5 mr-2"></i>Check-In</a>
                                        </li>
                                        <li>
                                            <a href="/scoreboard"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-trophy w-5 mr-2"></i>Scoreboard</a>
                                        </li>
                                        <li>
                                            <a href="/hunts"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-bug w-5 mr-2"></i>Bounties</a>
                                        </li>
                                        <li>
                                            <a href="/reported-ips"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-exclamation-triangle w-5 mr-2"></i>Reported IPs</a>
                                        </li>
                                        <li>
                                            <a href="/trademark-search"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-registered w-5 mr-2"></i>Trademarks</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">Communication</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/similarity-scan"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-clone w-5 mr-2"></i>SimilarityScan</a>
                                        </li>
                                        <li>
                                            <a href="/rooms"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-door-open w-5 mr-2"></i>Rooms</a>
                                        </li>
                                        <li>
                                            <a href="/video-call"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-video w-5 mr-2"></i>Video Call</a>
                                        </li>
                                        <li>
                                            <a href="/banned-apps"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-ban w-5 mr-2"></i>Banned Apps</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Column 2: Projects -->
                                <div>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mb-4">Projects</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/projects"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-box w-5 mr-2"></i>Projects</a>
                                        </li>
                                        <li>
                                            <a href="/repositories"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fab fa-github w-5 mr-2"></i>Repositories</a>
                                        </li>
                                        <li>
                                            <a href="/bidding"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-money-bill-wave w-5 mr-2"></i>Bid on Issues</a>
                                        </li>
                                        <li>
                                            <a href="/funding"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-seedling w-5 mr-2"></i>Funding</a>
                                        </li>
                                        <li>
                                            <a href="/bacon"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-coins w-5 mr-2"></i>BACON (coin)</a>
                                        </li>
                                        <li>
                                            <a href="/bacon-requests"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-hands-helping w-5 mr-2"></i>Bacon Requests</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">Users</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/users"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-user-friends w-5 mr-2"></i>Users</a>
                                        </li>
                                        <li>
                                            <a href="/messaging"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-envelope w-5 mr-2"></i>Messaging</a>
                                        </li>
                                        <li>
                                            <a href="/challenges"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-flag-checkered w-5 mr-2"></i>Challenges</a>
                                        </li>
                                        <li>
                                            <a href="/leaderboard"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-medal w-5 mr-2"></i>Leaderboard</a>
                                        </li>
                                        <li>
                                            <a href="/contributors"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-laptop-code w-5 mr-2"></i>Contributors</a>
                                        </li>
                                        <li>
                                            <a href="/deletions"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-trash-alt w-5 mr-2"></i>Takedowns</a>
                                        </li>
                                        <li>
                                            <a href="/badges"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-certificate w-5 mr-2"></i>Badges</a>
                                        </li>
                                        <li>
                                            <a href="/reminder-settings"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-bell w-5 mr-2"></i>Reminder Settings</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">Language</h3>
                                    <form action="/set-language" method="post" class="flex items-center">
                                        <i class="fas fa-globe-americas w-5 mr-2 text-gray-700"></i>
                                        <select name="language"
                                                onchange="this.form.submit()"
                                                class="form-select w-full text-gray-700 hover:text-[#e74c3c] bg-white border border-gray-300 rounded-md">
                                            <option value="en">English</option>
                                            <option value="es">Español</option>
                                            <option value="fr">Français</option>
                                        </select>
                                    </form>
                                </div>
                                <!-- Column 3: Teams and About -->
                                <div>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mb-4">Teams</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/teams"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-users w-5 mr-2"></i>Teams</a>
                                        </li>
                                        <li>
                                            <a href="/team-overview"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-users w-5 mr-2"></i>Your Team</a>
                                        </li>
                                        <li>
                                            <a href="/team-challenges"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-flag-checkered w-5 mr-2"></i>Team Challenges</a>
                                        </li>
                                        <li>
                                            <a href="/team-leaderboard"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-medal w-5 mr-2"></i>Team Leaderboard</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">About Us</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/about"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-info-circle w-5 mr-2"></i>About Us</a>
                                        </li>
                                        <li>
                                            <a href="/features"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fa-solid fa-gear w-5 mr-2"></i>Features</a>
                                        </li>
                                        <li>
                                            <a href="/sponsor"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-handshake w-5 mr-2"></i>Sponsorships</a>
                                        </li>
                                        <li>
                                            <a href="https://owasp.org/www-project-bug-logging-tool/"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-shield-alt w-5 mr-2"></i>OWASP Project</a>
                                        </li>
                                        <li>
                                            <a href="/donate"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-donate w-5 mr-2"></i>Donations</a>
                                        </li>
                                        <li>
                                            <a href="/forum"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-comments w-5 mr-2"></i>Forum</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">Resources</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="https://www.figma.com/file/2lfEZKvqcb4WxRPYEwJqeE/OWASP-BLT"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fab fa-figma w-5 mr-2"></i>Design</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP-BLT/BLT"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-edit w-5 mr-2"></i>Edit this page</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Column 4: Contribute and GitHub -->
                                <div>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mb-4">Contribute</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/contribution-guidelines"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-hands-helping w-5 mr-2"></i>Contribute</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP/BLT/blob/main/Setup.md"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-book w-5 mr-2"></i>Documentation</a>
                                        </li>
                                        <li>
                                            <a href="https://blt.owasp.org/swagger/"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-cogs w-5 mr-2"></i>Developer API</a>
                                        </li>
                                        <li>
                                            <a href="/education"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-tv w-5 mr-2"></i>Education</a>
                                        </li>
                                        <li>
                                            <a href="/ossh"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-hat-wizard w-5 mr-2"></i>Open Source Sorting Hat</a>
                                        </li>
                                        <li>
                                            <a href="/gsoc"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-sun w-5 mr-2"></i>GSOC</a>
                                        </li>
                                        <li>
                                            <a href="/roadmap"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-road w-5 mr-2"></i>Roadmap</a>
                                        </li>
                                        <li>
                                            <a href="/submit-roadmap-pr"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-code-branch w-5 mr-2"></i>Submit PR for review</a>
                                        </li>
                                        <li>
                                            <a href="/github-issue-prompt"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-code-branch w-5 mr-2"></i>Create an Issue</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">GitHub</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="https://github.com/OWASP/BLT"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fab fa-github w-5 mr-2"></i>GitHub</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP-BLT/BLT/"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-code-branch w-5 mr-2"></i>BLT Core</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP-BLT/BLT-Flutter"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-mobile-alt w-5 mr-2"></i>BLT Flutter</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP-BLT/BLT-Extension"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-puzzle-piece w-5 mr-2"></i>BLT Extension</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP-BLT/BLT-Action"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-play-circle w-5 mr-2"></i>BLT Action</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP-BLT/BLT-Bacon"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-coins w-5 mr-2"></i>BLT BACON</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/OWASP-BLT/BLT-Lettuce"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-leaf w-5 mr-2"></i>BLT Lettuce</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Column 5: Apps, Social, Site Info -->
                                <div>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mb-4">Apps</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="https://apps.apple.com/us/app/owasp-blt/id6448071954"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fab fa-apple w-5 mr-2"></i>iPhone App</a>
                                        </li>
                                        <li>
                                            <a href="/extension"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-puzzle-piece w-5 mr-2"></i>Chrome Extension</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">Social Links</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="https://twitter.com/owasp_blt"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fab fa-twitter w-5 mr-2"></i>Twitter</a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/groups/owaspfoundation/"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fab fa-facebook w-5 mr-2"></i>Facebook</a>
                                        </li>
                                        <li>
                                            <a href="/blog"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-blog w-5 mr-2"></i>Blog</a>
                                        </li>
                                        <li>
                                            <a href="https://owasp.org/slack/invite"
                                               target="_blank"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fab fa-slack w-5 mr-2"></i>Slack</a>
                                        </li>
                                    </ul>
                                    <h3 class="text-sm font-semibold text-[#e74c3c] uppercase mt-6 mb-4">Site Info</h3>
                                    <ul class="space-y-2">
                                        <li>
                                            <a href="/sitemap"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-sitemap w-5 mr-2"></i>Sitemap</a>
                                        </li>
                                        <li>
                                            <a href="/roadmap"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-road w-5 mr-2"></i>Roadmap</a>
                                        </li>
                                        <li>
                                            <a href="/status"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-check-circle w-5 mr-2"></i>Status</a>
                                        </li>
                                        <li>
                                            <a href="/stats"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-chart-line w-5 mr-2"></i>Stats</a>
                                        </li>
                                        <li>
                                            <a href="/stats-dashboard"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-chart-bar w-5 mr-2"></i>Stats Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/template-list"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-list w-5 mr-2"></i>Template List</a>
                                        </li>
                                        <li>
                                            <a href="/website-stats"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-chart-line w-5 mr-2"></i>Website Stats</a>
                                        </li>
                                        <li>
                                            <a href="/terms"
                                               class="flex items-center text-gray-700 hover:text-[#e74c3c]"><i class="fas fa-file-contract w-5 mr-2"></i>Terms</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Search Bar -->
                <div class="flex-1 max-w-xl mx-4 hidden sm:block">
                    <div class="relative flex items-center rounded-lg overflow-visible bg-white border-2 border-red-500 hover:bg-red-50 transition-colors duration-200">
                        <form class="w-full flex items-center" action="/search" method="get">
                            <input type="hidden" name="type" id="filter-type" value="all">
                            <input type="text"
                                   name="query"
                                   id="query-input"
                                   placeholder="Search here..."
                                   class="w-full pl-12 pr-4 py-2 text-gray-700 placeholder-gray-400 placeholder:select-none placeholder:text-base bg-transparent outline-none">
                            <div class="relative border-l-2 border-red-500 flex">
                                <button type="submit">
                                    <i class="fa-solid fa-arrow-right mx-2 text-red-500"></i>
                                </button>
                                <button id="organizations-btn"
                                        type="button"
                                        class="flex items-center h-full px-4 text-gray-700 hover:bg-red-50 transition-colors duration-200 focus:outline-none">
                                    <i id="selected-icon" class="fas fa-check mr-2 text-red-500"></i>
                                    <span id="selected-filter" class="hidden md:inline">All</span>
                                    <i class="fa fa-chevron-down ml-2 text-red-500 text-sm"></i>
                                </button>
                                <div id="organizations-dropdown"
                                     class="z-50 hidden absolute bg-white top-full left-0 w-max mt-2 rounded-lg shadow-xl border">
                                    <ul class="flex flex-col gap-2 px-4 py-2">
                                        <li>
                                            <button data-value="all"
                                                    class="block px-2 py-1 hover:bg-red-50 rounded filter-option">
                                                <i class="fa fa-check mr-2 text-red-500"></i>
                                                All
                                            </button>
                                        </li>
                                        <li>
                                            <button data-value="organizations"
                                                    class="block px-2 py-1 hover:bg-red-50 rounded filter-option">
                                                <i class="fa fa-building fa-fw mr-2 text-red-500"></i>
                                                Organizations
                                            </button>
                                        </li>
                                        <li>
                                            <button data-value="issues"
                                                    class="block px-2 py-1 hover:bg-red-50 rounded filter-option">
                                                <i class="fa fa-bug fa-fw mr-2 text-red-500"></i>
                                                Issues
                                            </button>
                                        </li>
                                        <li>
                                            <button data-value="domains"
                                                    class="block px-2 py-1 hover:bg-red-50 rounded filter-option">
                                                <i class="fa fa-globe fa-fw mr-2 text-red-500"></i>
                                                Domains
                                            </button>
                                        </li>
                                        <li>
                                            <button data-value="users"
                                                    class="block px-2 py-1 hover:bg-red-50 rounded filter-option">
                                                <i class="fa fa-user-group fa-fw mr-2 text-red-500"></i>
                                                Users
                                            </button>
                                        </li>
                                        <li>
                                            <button data-value="projects"
                                                    class="block px-2 py-1 hover:bg-red-50 rounded filter-option">
                                                <i class="fa fa-box fa-fw mr-2 text-red-500"></i>
                                                Projects
                                            </button>
                                        </li>
                                        <li>
                                            <button data-value="repos"
                                                    class="block px-2 py-1 hover:bg-red-50 rounded filter-option">
                                                <i class="fa-brands fa-github fa-fw mr-2 text-red-500"></i>
                                                Repos
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                        <i class="fa fa-search absolute left-4 text-red-500 z-10 my-auto text-lg"></i>
                    </div>
                </div>
                <!-- Mobile Search Button -->
                <button class="p-2 text-red-500 sm:hidden" onclick="toggleMobileSearch()">
                    <i class="fa fa-search text-3xl"></i>
                </button>
                <!-- Sign up and Log in Buttons (for non-authenticated state) -->
                <div class="flex items-center">
                    <div class="hidden lg:flex justify-center items-center gap-4">
                        <a href="/signup"
                           class="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                            Signup
                        </a>
                        <a href="/login"
                           class="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                            Login
                        </a>
                    </div>
                    <!-- Log in icon for mobile -->
                    <a href="/login" class="block lg:hidden m-2">
                        <i class="fa fa-user text-4xl text-red-500"></i>
                    </a>
                </div>
            </div>
        </div>
        <!-- Mobile Search Bar -->
        <div id="mobile-search"
             class="hidden sm:hidden md:hidden lg:hidden w-full px-4 py-3 bg-white border-t border-gray-200">
            <form action="/search" method="get" class="flex items-center">
                <div class="relative flex-1">
                    <i class="fa fa-search absolute text-xl left-3 top-1/2 -translate-y-1/2 text-red-500"></i>
                    <input type="text"
                           name="query"
                           placeholder="Search here..."
                           class="w-full pl-10 pr-4 py-3 px-2 border-2 border-red-500 rounded-lg text-gray-700 placeholder-gray-400 placeholder:select-none placeholder:text-base">
                    <input type="hidden" name="type" id="mobile-filter-type" value="all">
                </div>
                <button type="submit"
                        class="ml-2 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    <i class="fa fa-search text-xl"></i>
                </button>
            </form>
        </div>
    </nav>
`;