/**
 * BLT on Cloudflare Workers
 * Main entry point for the Cloudflare Workers application
 */

import { HEADER_TEMPLATE } from "./components/header";
import { SIDEBAR_TEMPLATE } from "./components/sidebar";

const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Bug Logging Tool</title>
    <meta name="description" content="Welcome to OWASP Bug Logging Tool, a platform to report bugs, earn rewards, and help secure the web through community-driven collaboration.">
    <meta name="keywords" content="Bug Logging Tool, OWASP, security, bug reporting, rewards, open source, community, web security, contributions">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Home - Bug Logging Tool">
    <meta property="og:description" content="Welcome to OWASP Bug Logging Tool, a platform to report bugs, earn rewards, and help secure the web through community-driven collaboration.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Sidebar -->
    ${SIDEBAR_TEMPLATE}

    <!-- Header -->
    ${HEADER_TEMPLATE}
    
    <!-- Main Content -->
    <div class="relative pt-24 mt-4">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 class="text-4xl font-bold mb-5 text-black/90">OWASP BLT: Secure the Web, Get Rewarded</h1>
            <p class="text-lg mb-4 text-black/80">
                Strengthen <span class="font-bold">worldwide applications</span> by <span class="font-bold">finding and fixing security & coding issues</span> through <span class="font-bold">bug bounties and issue rewards.</span> Earn <span class="font-bold">money via GitHub Sponsors & BCH</span> and get recognized with <span class="font-bold">BACON</span>, the first open-source security token on Bitcoin Runes.
            </p>
        </div>
        
        <!-- Features Section -->
        <section class="py-1">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <!-- Feature 1 -->
                    <div class="text-center">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
                            <i class="fas fa-shield-virus fa-2xl text-[#e74c3c]"></i>
                        </div>
                        <h3 class="text-lg font-semibold mb-1">Protect Applications</h3>
                        <p class="text-sm text-gray-600">Safeguard your applications from security vulnerabilities.</p>
                    </div>
                    <!-- Feature 2 -->
                    <div class="text-center">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
                            <i class="fas fa-hand-holding-usd fa-2xl text-[#e74c3c]"></i>
                        </div>
                        <h3 class="text-lg font-semibold mb-1">Earn Rewards</h3>
                        <p class="text-sm text-gray-600">Get rewarded for your security findings.</p>
                        <a href="#" class="inline-block mt-3 text-[#e74c3c] hover:text-[#c0392b] font-medium text-sm">
                            <span class="flex items-center gap-1">
                                View Bounties
                                <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                            </span>
                        </a>
                    </div>
                    <!-- Feature 3 -->
                    <div class="text-center">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
                            <i class="fas fa-robot fa-2xl text-[#e74c3c]"></i>
                        </div>
                        <h3 class="text-lg font-semibold mb-1">Automate Security</h3>
                        <p class="text-sm text-gray-600">Streamline your security workflows.</p>
                    </div>
                    <!-- New Education Feature -->
                    <div class="text-center">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-3 shadow-sm hover:shadow-md transition-all duration-200">
                            <i class="fas fa-graduation-cap fa-2xl text-[#e74c3c]"></i>
                        </div>
                        <div class="relative">
                            <span class="absolute -top-1 right-0 inline-flex items-center px-2 py-0.5 text-xs font-medium bg-[#e74c3c] text-white rounded-full animate-pulse">NEW</span>
                            <h3 class="text-lg font-semibold mb-1">Learn & Grow</h3>
                        </div>
                        <p class="text-sm text-gray-600">Access expert-led security courses.</p>
                        <a href="#" class="inline-block mt-3 text-[#e74c3c] hover:text-[#c0392b] font-medium text-sm">
                            <span class="flex items-center gap-1">
                                Start Learning
                                <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Decorative Divider -->
        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="flex items-center justify-center">
                <div class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div class="mx-2">
                    <a href="#" class="flex items-center justify-center gap-3 px-4 py-3 text-xl rounded-md border border-gray-300 hover:text-black hover:shadow-md transition-all duration-300">
                        <i class="fas fa-building text-[#e74c3c]"></i>
                        <span class="font-medium text-center">Register Organization</span>
                    </a>
                </div>
                <div class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
        </div>
        
        <!-- Recent Hackathons Section -->
        <section class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="mb-8">
                    <div class="flex items-center gap-4 mb-3">
                        <i class="fas fa-trophy text-2xl text-[#e74c3c]"></i>
                        <h2 class="text-3xl font-bold">Recent Hackathons</h2>
                        <div class="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                    </div>
                    <p class="text-gray-600 text-base">
                        Join our coding competitions, collaborate with the community, and win amazing prizes!
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <!-- Hackathon 1 -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                        <div class="h-48 bg-gradient-to-r from-[#e74c3c] to-red-700 flex items-center justify-center">
                            <i class="fas fa-code text-white text-5xl"></i>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold text-gray-900">Security Hackathon 2024</h3>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Active
                                </span>
                            </div>
                            <p class="text-gray-600 text-sm mb-3">
                                Organized by <a href="#" class="text-[#e74c3c] hover:underline">OWASP</a>
                            </p>
                            <p class="text-gray-700 mb-4 line-clamp-3">Join us for an exciting security hackathon where you can compete with other security researchers and win amazing prizes!</p>
                            <div class="flex items-center text-sm text-gray-500 mb-4">
                                <i class="far fa-calendar mr-2"></i>
                                <span>Nov 01, 2024 - Nov 30, 2024</span>
                            </div>
                            <a href="#" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e74c3c] hover:bg-red-700 transition-colors w-full">
                                View Details
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Hackathon 2 -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                        <div class="h-48 bg-gradient-to-r from-[#e74c3c] to-red-700 flex items-center justify-center">
                            <i class="fas fa-code text-white text-5xl"></i>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold text-gray-900">Web Security Challenge</h3>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Upcoming
                                </span>
                            </div>
                            <p class="text-gray-600 text-sm mb-3">
                                Organized by <a href="#" class="text-[#e74c3c] hover:underline">BLT Community</a>
                            </p>
                            <p class="text-gray-700 mb-4 line-clamp-3">Test your web security skills in this comprehensive challenge covering various vulnerability types and exploitation techniques.</p>
                            <div class="flex items-center text-sm text-gray-500 mb-4">
                                <i class="far fa-calendar mr-2"></i>
                                <span>Dec 01, 2024 - Dec 15, 2024</span>
                            </div>
                            <a href="#" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e74c3c] hover:bg-red-700 transition-colors w-full">
                                View Details
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a href="#" class="inline-flex items-center px-6 py-3 border border-[#e74c3c] text-[#e74c3c] rounded-lg hover:bg-[#e74c3c] hover:text-white font-medium transition-colors duration-200">
                        View All Hackathons
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Leaderboard Section -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold mb-4">Community Leaderboards</h2>
                    <div class="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-md mb-8">
                        <i class="fas fa-trophy text-[#e74c3c] mr-3"></i>
                        <span class="text-xl font-bold">Total Bounties Earned: $155</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Top Earners -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        <div class="p-4 border-b border-gray-200 bg-[#e74c3c] text-white">
                            <div class="flex items-center justify-between">
                                <h3 class="text-lg font-bold">Top Earners</h3>
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">1</span>
                                        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" class="w-8 h-8 rounded-full" alt="avatar" width="32" height="32">
                                        <a href="#" class="font-medium hover:text-[#e74c3c]">SecurityPro</a>
                                    </div>
                                    <span class="text-green-600 font-medium">$50.00</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">2</span>
                                        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" class="w-8 h-8 rounded-full" alt="avatar" width="32" height="32">
                                        <a href="#" class="font-medium hover:text-[#e74c3c]">BugHunter</a>
                                    </div>
                                    <span class="text-green-600 font-medium">$35.00</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">3</span>
                                        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" class="w-8 h-8 rounded-full" alt="avatar" width="32" height="32">
                                        <a href="#" class="font-medium hover:text-[#e74c3c]">CodeMaster</a>
                                    </div>
                                    <span class="text-green-600 font-medium">$25.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Top Bug Reporters -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        <div class="p-4 border-b border-gray-200 bg-[#e74c3c] text-white">
                            <div class="flex items-center justify-between">
                                <h3 class="text-lg font-bold">Top Bug Reporters</h3>
                                <i class="fas fa-bug"></i>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">1</span>
                                        <a href="#" class="text-sm hover:text-[#e74c3c] font-medium flex items-center gap-2">
                                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" width="24" height="24" class="w-6 h-6 rounded-full">
                                            SecurityPro
                                        </a>
                                    </div>
                                    <span class="text-sm text-gray-500">45 bugs</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">2</span>
                                        <a href="#" class="text-sm hover:text-[#e74c3c] font-medium flex items-center gap-2">
                                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" width="24" height="24" class="w-6 h-6 rounded-full">
                                            BugHunter
                                        </a>
                                    </div>
                                    <span class="text-sm text-gray-500">32 bugs</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">3</span>
                                        <a href="#" class="text-sm hover:text-[#e74c3c] font-medium flex items-center gap-2">
                                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" width="24" height="24" class="w-6 h-6 rounded-full">
                                            CodeMaster
                                        </a>
                                    </div>
                                    <span class="text-sm text-gray-500">28 bugs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Top PR Contributors -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        <div class="p-4 border-b border-gray-200 bg-[#e74c3c] text-white">
                            <div class="flex items-center justify-between">
                                <h3 class="text-lg font-bold">TOP BLT PRs - Nov</h3>
                                <i class="fas fa-code-branch"></i>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">1</span>
                                        <a href="#" target="_blank" class="text-sm hover:text-[#e74c3c] font-medium flex items-center gap-2">
                                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" width="24" height="24" class="w-6 h-6 rounded-full">
                                            GitContributor1
                                        </a>
                                    </div>
                                    <span class="text-sm text-gray-500">15 PRs</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">2</span>
                                        <a href="#" target="_blank" class="text-sm hover:text-[#e74c3c] font-medium flex items-center gap-2">
                                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" width="24" height="24" class="w-6 h-6 rounded-full">
                                            GitContributor2
                                        </a>
                                    </div>
                                    <span class="text-sm text-gray-500">12 PRs</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">3</span>
                                        <a href="#" target="_blank" class="text-sm hover:text-[#e74c3c] font-medium flex items-center gap-2">
                                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" width="24" height="24" class="w-6 h-6 rounded-full">
                                            GitContributor3
                                        </a>
                                    </div>
                                    <span class="text-sm text-gray-500">10 PRs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Top Referrals -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        <div class="p-4 border-b border-gray-200 bg-[#e74c3c] text-white">
                            <div class="flex items-center justify-between">
                                <h3 class="text-lg font-bold">Top Referrals</h3>
                                <i class="fas fa-user-plus"></i>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">1</span>
                                        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" class="w-8 h-8 rounded-full" alt="avatar" width="32" height="32">
                                        <a href="#" class="font-medium hover:text-[#e74c3c]">
                                            Referrer1
                                        </a>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-500 mr-3">
                                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                                            20 pts
                                        </span>
                                        <span class="font-medium">
                                            <i class="fas fa-user-check text-green-500 mr-1"></i>
                                            10
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">2</span>
                                        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" class="w-8 h-8 rounded-full" alt="avatar" width="32" height="32">
                                        <a href="#" class="font-medium hover:text-[#e74c3c]">
                                            Referrer2
                                        </a>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-500 mr-3">
                                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                                            16 pts
                                        </span>
                                        <span class="font-medium">
                                            <i class="fas fa-user-check text-green-500 mr-1"></i>
                                            8
                                        </span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[#e74c3c] font-bold">3</span>
                                        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" class="w-8 h-8 rounded-full" alt="avatar" width="32" height="32">
                                        <a href="#" class="font-medium hover:text-[#e74c3c]">
                                            Referrer3
                                        </a>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-500 mr-3">
                                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                                            12 pts
                                        </span>
                                        <span class="font-medium">
                                            <i class="fas fa-user-check text-green-500 mr-1"></i>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Project Cards Section -->
        <section class="py-6">
            <div class="max-w-7xl mx-auto px-4">
                <div class="mb-8">
                    <div class="flex items-center gap-4">
                        <i class="fas fa-code-branch text-2xl text-[#e74c3c]"></i>
                        <h2 class="text-3xl font-bold">Our Components</h2>
                        <div class="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                    </div>
                    <p class="text-gray-600 text-base max-w-9xl mx-auto mt-3">
                        Four key components power OWASP BLT. The core, mobile access, browser integration, and automation—working together to secure applications worldwide.
                    </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Core Card -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col">
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fas fa-shield-alt text-2xl text-[#e74c3c]"></i>
                            <h4 class="font-bold text-lg">
                                <a href="#" class="hover:text-[#e74c3c] transition-colors">Django Core</a>
                            </h4>
                        </div>
                        <p class="text-gray-600 text-sm mb-4 flex-grow">The main engine powering OWASP BLT's system API and Slack Bot.</p>
                        <div class="flex flex-col gap-2">
                            <a href="https://github.com/OWASP-BLT/BLT" target="_blank" class="inline-flex items-center text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                                <i class="fab fa-github mr-2"></i><i class="fas fa-star text-yellow-400 mr-2"></i> Star
                                <span class="ml-2 bg-gray-100 px-2 py-0.5 rounded-full text-sm">1.2k</span>
                            </a>
                            <a href="#" class="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                                <i class="fas fa-bug mr-2"></i> Report a Bug
                            </a>
                        </div>
                    </div>
                    
                    <!-- App Card -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col">
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fas fa-mobile-alt text-2xl text-[#e74c3c]"></i>
                            <h4 class="font-bold text-lg">
                                <a href="#" class="hover:text-[#e74c3c] transition-colors">Flutter iOS App</a>
                            </h4>
                        </div>
                        <p class="text-gray-600 text-sm mb-4 flex-grow">Mobile application for on-the-go bug reporting and management.</p>
                        <div class="flex flex-col gap-2">
                            <a href="https://github.com/OWASP-BLT/BLT-Flutter" target="_blank" class="inline-flex items-center text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                                <i class="fab fa-github mr-2"></i><i class="fas fa-star text-yellow-400 mr-2"></i> Star
                                <span class="ml-2 bg-gray-100 px-2 py-0.5 rounded-full text-sm">156</span>
                            </a>
                            <a href="#" class="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                                <i class="fab fa-apple mr-2"></i> Download App
                            </a>
                        </div>
                    </div>
                    
                    <!-- Extension Card -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col">
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fas fa-puzzle-piece text-2xl text-[#e74c3c]"></i>
                            <h4 class="font-bold text-lg">
                                <a href="#" class="hover:text-[#e74c3c] transition-colors">Chrome Extension</a>
                            </h4>
                        </div>
                        <p class="text-gray-600 text-sm mb-4 flex-grow">Browser extension for quick bug reporting and screenshots.</p>
                        <div class="flex flex-col gap-2">
                            <a href="https://github.com/OWASP-BLT/BLT-Extension" target="_blank" class="inline-flex items-center text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                                <i class="fab fa-github mr-2"></i><i class="fas fa-star text-yellow-400 mr-2"></i> Star
                                <span class="ml-2 bg-gray-100 px-2 py-0.5 rounded-full text-sm">89</span>
                            </a>
                            <a href="#" class="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                                <i class="fab fa-chrome mr-2"></i> Install Extension
                            </a>
                        </div>
                    </div>
                    
                    <!-- Action Card -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col">
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fas fa-bolt text-2xl text-[#e74c3c]"></i>
                            <h4 class="font-bold text-lg">
                                <a href="#" class="hover:text-[#e74c3c] transition-colors">GitHub Action</a>
                            </h4>
                        </div>
                        <p class="text-gray-600 text-sm mb-4 flex-grow">GitHub Action for automated security checks and reporting.</p>
                        <div class="flex flex-col gap-2">
                            <a href="https://github.com/OWASP-BLT/BLT-Action" target="_blank" class="inline-flex items-center text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                                <i class="fab fa-github mr-2"></i><i class="fas fa-star text-yellow-400 mr-2"></i> Star
                                <span class="ml-2 bg-gray-100 px-2 py-0.5 rounded-full text-sm">45</span>
                            </a>
                            <a href="#" class="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                                <i class="fas fa-code-branch mr-2"></i> Use Latest
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Referral Program Card (Not Authenticated Version) -->
        <div class="max-w-7xl mx-auto px-4 mb-8">
            <div class="bg-white rounded-xl shadow-lg p-6 border border-[#e74c3c]">
                <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-red-50 rounded-lg">
                        <i class="fas fa-users text-[#e74c3c] text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">Join Our Referral Program</h3>
                        <p class="text-gray-600">Sign in to get your referral link and start earning points!</p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <a href="#" class="px-4 py-2 bg-[#e74c3c] text-white rounded-lg hover:bg-[#c0392b] hover:text-white transition-colors">
                        <i class="fas fa-sign-in-alt mr-2"></i>Sign In to Participate
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Decorative Divider -->
        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="flex items-center justify-center">
                <div class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div class="mx-4">
                    <i class="fas fa-chart-line text-2xl text-[#e74c3c]"></i>
                </div>
                <div class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
        </div>
        
        <!-- Latest Activity Section -->
        <section class="py-12">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Latest Activity</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Latest Repositories -->
                    <div class="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-semibold text-gray-800">Latest Repositories</h3>
                                <span class="text-sm text-gray-500">(24 total)</span>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] truncate max-w-[280px]">awesome-security-tools</a>
                                    <span class="text-xs text-gray-500">Python</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] truncate max-w-[280px]">vulnerability-scanner</a>
                                    <span class="text-xs text-gray-500">JavaScript</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] truncate max-w-[280px]">penetration-testing-kit</a>
                                    <span class="text-xs text-gray-500">Go</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] truncate max-w-[280px]">security-automation</a>
                                    <span class="text-xs text-gray-500">Python</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] truncate max-w-[280px]">web-security-checklist</a>
                                    <span class="text-xs text-gray-500">Markdown</span>
                                </div>
                            </div>
                            <div class="flex justify-between mt-6 pt-4 border-t border-gray-100">
                                <a href="#" class="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium">View All</a>
                                <a href="#" class="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M12 4v16m8-8H4" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    Add Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recent Forum Posts -->
                    <div class="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-semibold text-gray-800">Recent Discussions</h3>
                                <span class="text-sm text-gray-500">(15 recent)</span>
                            </div>
                            <div class="space-y-4">
                                <div class="flex flex-col gap-1">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] font-medium">Best practices for SQL injection prevention</a>
                                    <div class="flex items-center gap-4 text-xs text-gray-500">
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-user"></i>
                                            SecurityExpert
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-clock"></i>
                                            2 hours ago
                                        </span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] font-medium">XSS vulnerabilities in modern frameworks</a>
                                    <div class="flex items-center gap-4 text-xs text-gray-500">
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-user"></i>
                                            DevSecOps
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-clock"></i>
                                            5 hours ago
                                        </span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] font-medium">How to get started with bug bounty hunting?</a>
                                    <div class="flex items-center gap-4 text-xs text-gray-500">
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-user"></i>
                                            NewHunter
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-clock"></i>
                                            1 day ago
                                        </span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <a href="#" class="text-sm hover:text-[#e74c3c] font-medium">CSRF protection implementation guide</a>
                                    <div class="flex items-center gap-4 text-xs text-gray-500">
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-user"></i>
                                            WebSecPro
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <i class="fas fa-clock"></i>
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between mt-6 pt-4 border-t border-gray-100">
                                <a href="#" class="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium">View All</a>
                                <a href="#" class="text-sm text-[#e74c3c] hover:text-[#c0392b] font-medium flex items-center">
                                    <i class="fas fa-plus mr-1"></i>
                                    New Discussion
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Latest Bugs -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Latest Bug Reports</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Bug 1 -->
                    <div class="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-semibold text-gray-800 truncate">XSS vulnerability in search form</h3>
                                <span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                                    Open
                                </span>
                            </div>
                            <div class="flex items-center text-gray-600 text-sm mb-4">
                                <i class="fas fa-globe mr-2"></i>
                                <a href="#" class="hover:text-[#e74c3c] truncate" target="_blank">example.com</a>
                            </div>
                            <div class="mb-4 rounded-lg overflow-hidden bg-gray-100 h-32 flex items-center justify-center">
                                <i class="fas fa-image text-gray-400 text-3xl"></i>
                            </div>
                            <div class="flex justify-between items-center text-sm text-gray-500">
                                <div class="flex items-center">
                                    <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" class="w-6 h-6 rounded-full mr-2" width="24" height="24">
                                    <a href="#" class="hover:text-[#e74c3c]">SecurityPro</a>
                                </div>
                                <span>3 hours ago</span>
                            </div>
                            <div class="flex justify-between mt-6 pt-4 border-t border-gray-100">
                                <div class="flex items-center">
                                    <span class="flex items-center mr-4"><i class="fas fa-thumbs-up text-green-500 mr-1"></i> 15</span>
                                    <span class="flex items-center"><i class="fas fa-tag text-blue-500 mr-1"></i> High</span>
                                </div>
                                <a href="#" class="text-[#e74c3c] hover:text-[#c0392b] font-medium">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bug 2 -->
                    <div class="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-semibold text-gray-800 truncate">SQL injection in login page</h3>
                                <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                    Resolved
                                </span>
                            </div>
                            <div class="flex items-center text-gray-600 text-sm mb-4">
                                <i class="fas fa-globe mr-2"></i>
                                <a href="#" class="hover:text-[#e74c3c] truncate" target="_blank">testsite.org</a>
                            </div>
                            <div class="mb-4 rounded-lg overflow-hidden bg-gray-100 h-32 flex items-center justify-center">
                                <i class="fas fa-image text-gray-400 text-3xl"></i>
                            </div>
                            <div class="flex justify-between items-center text-sm text-gray-500">
                                <div class="flex items-center">
                                    <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="avatar" class="w-6 h-6 rounded-full mr-2" width="24" height="24">
                                    <a href="#" class="hover:text-[#e74c3c]">BugHunter</a>
                                </div>
                                <span>1 day ago</span>
                            </div>
                            <div class="flex justify-between mt-6 pt-4 border-t border-gray-100">
                                <div class="flex items-center">
                                    <span class="flex items-center mr-4"><i class="fas fa-thumbs-up text-green-500 mr-1"></i> 28</span>
                                    <span class="flex items-center"><i class="fas fa-tag text-blue-500 mr-1"></i> Critical</span>
                                </div>
                                <a href="#" class="text-[#e74c3c] hover:text-[#c0392b] font-medium">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a href="#" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#e74c3c] hover:bg-[#d44637] transition-colors">
                        <i class="fas fa-list mr-2"></i> View All Bug Reports
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Latest Blog Posts Section -->
        <section class="py-12">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Blog Post 1 -->
                    <div class="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
                        <div class="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <i class="fas fa-newspaper text-gray-400 text-5xl"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">Top 10 Security Vulnerabilities in 2024</h3>
                            <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span class="flex items-center gap-1">
                                    <i class="fas fa-user"></i>
                                    SecurityEditor
                                </span>
                                <span class="flex items-center gap-1">
                                    <i class="fas fa-clock"></i>
                                    3 days ago
                                </span>
                            </div>
                            <p class="text-gray-700 mb-4">Explore the most critical security vulnerabilities discovered this year and learn how to protect your applications from these threats...</p>
                            <a href="#" class="text-[#e74c3c] hover:text-[#c0392b] font-medium">Read more</a>
                        </div>
                    </div>
                    
                    <!-- Blog Post 2 -->
                    <div class="bg-white rounded-lg shadow-lg border-2 border-[#e74c3c] overflow-hidden">
                        <div class="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                            <i class="fas fa-newspaper text-gray-400 text-5xl"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">Getting Started with Bug Bounty Programs</h3>
                            <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span class="flex items-center gap-1">
                                    <i class="fas fa-user"></i>
                                    BountyExpert
                                </span>
                                <span class="flex items-center gap-1">
                                    <i class="fas fa-clock"></i>
                                    1 week ago
                                </span>
                            </div>
                            <p class="text-gray-700 mb-4">A comprehensive guide for beginners looking to start their journey in bug bounty hunting and ethical hacking...</p>
                            <a href="#" class="text-[#e74c3c] hover:text-[#c0392b] font-medium">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Tools for Organizations Section -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Tools for Organizations</h2>
                <!-- Primary Tools Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    <!-- Organizations -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-building text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Organizations</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Browse and manage organizations</p>
                    </a>
                    <!-- Add Organization -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-plus text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Register Organization</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Add your company to our platform</p>
                    </a>
                    <!-- Domains -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-globe text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Domains</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Manage website domains and assets</p>
                    </a>
                    <!-- Bugs -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-bug text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Bugs</span>
                        <p class="text-xs text-gray-600 text-center mt-1">View and track reported vulnerabilities</p>
                    </a>
                    <!-- Issues -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-exclamation-circle text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Issues</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Track GitHub issues and tasks</p>
                    </a>
                </div>
                <!-- Secondary Tools Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    <!-- Bounties -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-dollar-sign text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Bounties</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Set up and manage bug bounty programs</p>
                    </a>
                    <!-- Check-ins -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-calendar-check text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Check-ins</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Schedule and track security reviews</p>
                    </a>
                    <!-- Time Logs -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-clock text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Time Logs</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Track time spent on security tasks</p>
                    </a>
                    <!-- Trademarks -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-trademark text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Trademarks</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Search and monitor trademark usage</p>
                    </a>
                    <!-- Map -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-map-marked-alt text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Map</span>
                        <p class="text-xs text-gray-600 text-center mt-1">View global security activity</p>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Tools for Projects Section -->
        <section class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-8">Tools for Projects</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    <!-- Projects -->
                    <a href="#" class="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-project-diagram text-2xl text-[#e74c3c] mb-2"></i>
                        <span class="text-base font-medium text-center">Projects</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Manage your security projects</p>
                    </a>
                    <!-- Repositories -->
                    <a href="#" class="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-code-branch text-2xl text-[#e74c3c] mb-2"></i>
                        <span class="text-base font-medium text-center">Repositories</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Connect and monitor GitHub repos</p>
                    </a>
                    <!-- Bid on Issues -->
                    <a href="#" class="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-gavel text-2xl text-[#e74c3c] mb-2"></i>
                        <span class="text-base font-medium text-center">Bid on Issues</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Place bids on open issues</p>
                    </a>
                    <!-- Funding -->
                    <a href="#" class="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-hand-holding-usd text-2xl text-[#e74c3c] mb-2"></i>
                        <span class="text-base font-medium text-center">Funding</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Manage project funding & rewards</p>
                    </a>
                    <!-- Bacon -->
                    <a href="#" class="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-bacon text-2xl text-[#e74c3c] mb-2"></i>
                        <span class="text-base font-medium text-center">Bacon</span>
                        <p class="text-xs text-gray-600 text-center mt-1">Earn & manage Bacon tokens</p>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Tools for Users & Teams Section -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Tools for Users & Teams</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    <!-- Users -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-users text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Users</span>
                        <p class="text-sm text-gray-600 text-center mt-2">Manage team members</p>
                    </a>
                    <!-- Teams -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-user-friends text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Teams</span>
                        <p class="text-sm text-gray-600 text-center mt-2">Create & manage teams</p>
                    </a>
                    <!-- Challenges -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-flag text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Challenges</span>
                        <p class="text-sm text-gray-600 text-center mt-2">Security challenges</p>
                    </a>
                    <!-- Leaderboards -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-trophy text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Leaderboards</span>
                        <p class="text-sm text-gray-600 text-center mt-2">Track achievements</p>
                    </a>
                    <!-- Badges -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-medal text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Badges</span>
                        <p class="text-sm text-gray-600 text-center mt-2">Earn achievements</p>
                    </a>
                    <!-- Analytics -->
                    <a href="#" class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                        <i class="fas fa-chart-line text-3xl text-[#e74c3c] mb-3"></i>
                        <span class="text-lg font-medium text-center">Analytics</span>
                        <p class="text-sm text-gray-600 text-center mt-2">Team performance</p>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Corporate Supporters Section -->
        <section class="bg-white rounded-xl shadow-sm p-8 mb-8 max-w-7xl mx-auto">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
                    <i class="fas fa-handshake text-[#e74c3c]"></i>
                    Corporate Supporters
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- OWASP -->
                    <div class="flex flex-col items-center text-center">
                        <a href="#" class="w-32 h-32 flex items-center justify-center mb-4 hover:opacity-80 transition-opacity">
                            <div class="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                                <i class="fas fa-shield-alt text-5xl text-gray-400"></i>
                            </div>
                        </a>
                        <p class="text-gray-700">
                            BLT is an official OWASP project, adhering to the highest standards of open-source security.
                        </p>
                    </div>
                    <!-- Sentry -->
                    <div class="flex flex-col items-center text-center">
                        <a href="#" class="w-32 h-32 flex items-center justify-center mb-4 hover:opacity-80 transition-opacity">
                            <div class="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                                <i class="fas fa-bug text-5xl text-gray-400"></i>
                            </div>
                        </a>
                        <p class="text-gray-700">Sentry provides BLT with a free plan for error monitoring and performance tracking.</p>
                    </div>
                    <!-- Google -->
                    <div class="flex flex-col items-center text-center">
                        <a href="#" class="w-32 h-32 flex items-center justify-center mb-4 hover:opacity-80 transition-opacity">
                            <div class="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                                <i class="fab fa-google text-5xl text-gray-400"></i>
                            </div>
                        </a>
                        <p class="text-gray-700">
                            Google supports BLT through <a href="#" class="text-[#e74c3c] hover:text-[#c0392b]">Google Summer of Code</a>, fostering student contributions.
                        </p>
                    </div>
                    <!-- Your Logo Here -->
                    <div class="flex flex-col items-center text-center">
                        <div class="w-32 h-32 flex items-center justify-center mb-4 border-2 border-dashed border-[#e74c3c] rounded-lg">
                            <i class="fas fa-image text-6xl text-[#e74c3c]"></i>
                        </div>
                        <p class="text-gray-700">
                            Donate to the BLT project to support our development and have your logo featured here. <a href="#" target="_blank" class="text-[#e74c3c] hover:text-[#c0392b]">Become a Supporter</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Call to Action Section -->
        <section class="py-12 max-w-7xl mx-auto">
            <div class="text-center">
                <h2 class="text-3xl font-bold mb-6">Get Involved</h2>
                <p class="mb-8">Join our community and help make the internet a safer place.</p>
                <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                    <a href="#" class="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                        <i class="fas fa-users mr-2"></i> Join the Community
                    </a>
                    <a href="#" class="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                        <i class="fas fa-project-diagram mr-2"></i> Explore Projects
                    </a>
                    <a href="#" class="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                        <i class="fas fa-road mr-2"></i> Roadmap
                    </a>
                    <a href="#" class="inline-flex select-none items-center justify-center px-4 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200">
                        <i class="fas fa-donate mr-2"></i> Support Us
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Footer -->
        <footer class="py-8 max-w-7xl mx-auto">
            <div class="text-center">
                <p class="mb-4">Follow us on:</p>
                <div class="flex justify-center space-x-6">
                    <a href="https://twitter.com/OWASP_BLT" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="https://github.com/OWASP-BLT" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                </div>
                <p class="mt-4">© 2024 OWASP BLT. All rights reserved.</p>
                <p>Last commit: abc123def</p>
            </div>
        </footer>
    </div>
    
    <!-- GitHub Buttons Script -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script src="/js/main.js"></script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve static files
    if (url.pathname.startsWith('/css/') || 
        url.pathname.startsWith('/js/') || 
        url.pathname.startsWith('/images/')) {
      return env.ASSETS.fetch(request);
    }
    
    // Serve main page
    return new Response(HTML_TEMPLATE, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};
