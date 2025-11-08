/**
 * Header Component
 * Main navigation bar for the OWASP BLT application
 */

export const SIDEBAR_TEMPLATE = `
    <div class="sidebar fixed left-0 top-18 h-[calc(100vh-4rem)] bg-white border-r border-gray-300 transform -translate-x-full transition-all duration-300 ease-in-out z-[8888] w-[380px] shadow-md">
        <div class="h-full flex flex-col justify-between overflow-hidden">
            <div class="overflow-y-auto flex-grow py-2 scrollbar-none">
                <!-- Main Navigation -->
                <nav class="px-2 space-y-2 mb-8 mt-2">
                    <!-- Organizations Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Organizations</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-building"></i>
                            </div>
                            <span class="truncate">Organizations</span>
                        </a>
                        <!-- Submenu -->
                        <div class="ml-8 mt-1 space-y-1">
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-plus"></i>
                                </div>
                                <span class="truncate">Register Organization</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-globe"></i>
                                </div>
                                <span class="truncate">Domains</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <span class="truncate">Map</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-rss"></i>
                                </div>
                                <span class="truncate">Feed</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <span class="truncate">Hackathons</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-bug"></i>
                                </div>
                                <span class="truncate">Bugs</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fab fa-github"></i>
                                </div>
                                <span class="truncate">Issues</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-fire"></i>
                                </div>
                                <span class="truncate">Time Logs</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-user-check"></i>
                                </div>
                                <span class="truncate">Check-In</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <span class="truncate">Scoreboard</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-search"></i>
                                </div>
                                <span class="truncate">Bounties</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </div>
                                <span class="truncate">Reported IPs</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-registered"></i>
                                </div>
                                <span class="truncate">Trademarks</span>
                            </a>
                        </div>
                    </div>

                    <!-- Projects Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Projects</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-box"></i>
                            </div>
                            <span class="truncate">Projects</span>
                        </a>
                        <!-- Submenu -->
                        <div class="ml-8 mt-1 space-y-1">
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fab fa-github"></i>
                                </div>
                                <span class="truncate">Repositories</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-money-bill-wave"></i>
                                </div>
                                <span class="truncate">Bid on Issues</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-seedling"></i>
                                </div>
                                <span class="truncate">Funding</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-coins"></i>
                                </div>
                                <span class="truncate">BACON (coin)</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-hands-helping"></i>
                                </div>
                                <span class="truncate">Bacon Requests</span>
                            </a>
                        </div>
                    </div>

                    <!-- Users Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Users</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-user-friends"></i>
                            </div>
                            <span class="truncate">Users</span>
                        </a>
                        <!-- Submenu -->
                        <div class="ml-8 mt-1 space-y-1">
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <span class="truncate">Messaging</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-flag-checkered"></i>
                                </div>
                                <span class="truncate">Challenges</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-coins"></i>
                                </div>
                                <span class="truncate">Staking</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-medal"></i>
                                </div>
                                <span class="truncate">Leaderboard</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <span class="truncate">Contributors</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-trash-alt"></i>
                                </div>
                                <span class="truncate">Takedowns</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-certificate"></i>
                                </div>
                                <span class="truncate">Badges</span>
                            </a>
                        </div>
                    </div>

                    <!-- Teams Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Teams</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-users"></i>
                            </div>
                            <span class="truncate">Teams</span>
                        </a>
                        <!-- Submenu -->
                        <div class="ml-8 mt-1 space-y-1">
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-users"></i>
                                </div>
                                <span class="truncate">Your Team</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-flag-checkered"></i>
                                </div>
                                <span class="truncate">Challenges</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-medal"></i>
                                </div>
                                <span class="truncate">Leaderboard</span>
                            </a>
                        </div>
                    </div>

                    <!-- About Us Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">About Us</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            <span class="truncate">About Us</span>
                        </a>
                        <!-- Submenu -->
                        <div class="ml-8 mt-1 space-y-1">
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fa-solid fa-gear"></i>
                                </div>
                                <span class="truncate">Features</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-handshake"></i>
                                </div>
                                <span class="truncate">Sponsorships</span>
                            </a>
                            <a href="https://owasp.org/www-project-bug-logging-tool/" target="_blank" rel="noopener" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <span class="truncate">OWASP Project</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-donate"></i>
                                </div>
                                <span class="truncate">Donations</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-comments"></i>
                                </div>
                                <span class="truncate">Forum</span>
                            </a>
                        </div>
                    </div>

                    <!-- Contribute Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Contribute</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-hands-helping"></i>
                            </div>
                            <span class="truncate">Contribute</span>
                        </a>
                        <!-- Submenu -->
                        <div class="ml-8 mt-1 space-y-1">
                            <a href="https://github.com/OWASP-BLT/BLT/blob/main/CONTRIBUTING.md" target="_blank" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-book"></i>
                                </div>
                                <span class="truncate">Documentation</span>
                            </a>
                            <a href="https://blt.owasp.org/swagger/" target="_blank" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <span class="truncate">Developer API</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-tv"></i>
                                </div>
                                <span class="truncate">Education</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-flask"></i>
                                </div>
                                <span class="truncate">Security Labs</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-hat-wizard"></i>
                                </div>
                                <span class="truncate">Open Source Sorting Hat</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-sun"></i>
                                </div>
                                <span class="truncate">GSOC</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-road"></i>
                                </div>
                                <span class="truncate">Roadmap</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-code-branch"></i>
                                </div>
                                <span class="truncate">Submit PR for review</span>
                            </a>
                            <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                                <span class="truncate">Create an Issue</span>
                            </a>
                        </div>
                    </div>

                    <!-- GitHub Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">GitHub</span>
                        </div>
                        <a href="https://github.com/OWASP/BLT" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fab fa-github"></i>
                            </div>
                            <span class="truncate">GitHub</span>
                        </a>
                        <!-- Submenu -->
                        <div class="ml-8 mt-1 space-y-1">
                            <a href="https://github.com/OWASP-BLT/BLT/" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-code-branch"></i>
                                </div>
                                <span class="truncate">BLT Core</span>
                            </a>
                            <a href="https://github.com/OWASP-BLT/BLT-Flutter" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <span class="truncate">BLT Flutter</span>
                            </a>
                            <a href="https://github.com/OWASP-BLT/BLT-Extension" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-puzzle-piece"></i>
                                </div>
                                <span class="truncate">BLT Extension</span>
                            </a>
                            <a href="https://github.com/OWASP-BLT/BLT-Action" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-play-circle"></i>
                                </div>
                                <span class="truncate">BLT Action</span>
                            </a>
                            <a href="https://github.com/OWASP-BLT/BLT-Bacon" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-coins"></i>
                                </div>
                                <span class="truncate">BLT BACON</span>
                            </a>
                            <a href="https://github.com/OWASP-BLT/BLT-Lettuce" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                                <div class="mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#e74c3c] transition-all duration-200">
                                    <i class="fas fa-leaf"></i>
                                </div>
                                <span class="truncate">BLT Lettuce</span>
                            </a>
                        </div>
                    </div>

                    <!-- Communication Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Communication</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-clone"></i>
                            </div>
                            <span class="truncate">SimilarityScan</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-door-open"></i>
                            </div>
                            <span class="truncate">Rooms</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-video"></i>
                            </div>
                            <span class="truncate">Video Call</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-ban"></i>
                            </div>
                            <span class="truncate">Banned Apps</span>
                        </a>
                    </div>

                    <!-- Apps Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Apps</span>
                        </div>
                        <a href="https://apps.apple.com/us/app/owasp-blt/id6448071954" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fab fa-apple"></i>
                            </div>
                            <span class="truncate">iPhone App</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-puzzle-piece"></i>
                            </div>
                            <span class="truncate">Chrome Extension</span>
                        </a>
                    </div>

                    <!-- Social Links Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Social Links</span>
                        </div>
                        <a href="https://twitter.com/owasp_blt" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <span class="truncate">Twitter</span>
                        </a>
                        <a href="https://www.facebook.com/groups/owaspfoundation/" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fab fa-facebook"></i>
                            </div>
                            <span class="truncate">Facebook</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-blog"></i>
                            </div>
                            <span class="truncate">Blog</span>
                        </a>
                        <a href="https://owasp.org/slack/invite" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fab fa-slack"></i>
                            </div>
                            <span class="truncate">Slack</span>
                        </a>
                    </div>

                    <!-- Site Info Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Site Info</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-sitemap"></i>
                            </div>
                            <span class="truncate">Sitemap</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-road"></i>
                            </div>
                            <span class="truncate">Roadmap</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <span class="truncate">Status</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <span class="truncate">Stats</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <span class="truncate">Stats Dashboard</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-list"></i>
                            </div>
                            <span class="truncate">Template List</span>
                        </a>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <span class="truncate">Website Stats</span>
                        </a>
                    </div>

                    <!-- Legal Section -->
                    <div>
                        <div class="px-2 py-2">
                            <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Legal</span>
                        </div>
                        <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                            <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                                <i class="fas fa-file-contract"></i>
                            </div>
                            <span class="truncate">Terms</span>
                        </a>
                    </div>

                    <!-- Language selector -->
                    <div class="px-2 py-2">
                        <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Language</span>
                    </div>
                    <form class="px-2">
                        <div class="relative mt-1">
                            <div class="flex items-center">
                                <i class="fas fa-globe-americas mr-3 text-[#e74c3c]"></i>
                                <select class="appearance-none w-full pl-2 pr-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#e74c3c] focus:border-[#e74c3c]">
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                    <i class="fas fa-chevron-down text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </form>

                    <!-- Resources Section -->
                    <div class="px-2 py-2">
                        <span class="text-sm text-[#e74c3c] font-semibold uppercase tracking-wider">Resources</span>
                    </div>
                    <a href="https://www.figma.com/file/2lfEZKvqcb4WxRPYEwJqeE/OWASP-BLT?type=design&node-id=0%3A1&mode=design&t=Hy0GZXlVxBPHQMxr-1" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200" target="_blank" rel="noopener noreferrer">
                        <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                            <i class="fab fa-figma"></i>
                        </div>
                        <span class="truncate">Design</span>
                    </a>
                    <a href="#" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200">
                        <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                            <i class="fas fa-palette"></i>
                        </div>
                        <span class="truncate">Style Guide</span>
                    </a>
                    <a href="https://github.com/OWASP-BLT/BLT" class="group flex items-center px-2 py-2 text-lg font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#e74c3c] transition-all duration-200" target="_blank" rel="noopener">
                        <div class="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-gray-500 group-hover:bg-[#fde0dd] group-hover:text-[#e74c3c] transition-all duration-200">
                            <i class="fas fa-edit"></i>
                        </div>
                        <span class="truncate">Edit this page</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
`;