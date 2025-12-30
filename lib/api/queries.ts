/**
 * API Query functions for TanStack Query
 * These functions fetch data from Django REST Framework endpoints
 */

import { apiClient } from './client';

// Types matching Django models (adjust based on actual BLT models)
export interface Organization {
  id: number;
  name: string;
  description?: string;
  website?: string;
  logo?: string;
  created_at?: string;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'resolved' | 'closed';
  severity: 'low' | 'medium' | 'high' | 'critical';
  reporter: number;
  organization?: number;
  domain?: string;
  created_at: string;
  updated_at: string;
}

export interface Hackathon {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: 'active' | 'upcoming' | 'ended';
  organizer: number;
  created_at: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  href?: string;
  avatar?: string;
  value: string | number;
  valueLabel?: React.ReactNode;
  user?: {
    id: number;
    username: string;
    avatar?: string;
  };
  score?: number;
}

// Organizations API
export const organizationsApi = {
  getAll: () => apiClient.get<Organization[]>('/organizations/'),
  getById: (id: number) => apiClient.get<Organization>(`/organizations/${id}/`),
  create: (data: Partial<Organization>) => apiClient.post<Organization>('/organizations/', data),
};

// Issues API
export const issuesApi = {
  getAll: (params?: { organization?: number; status?: string }) => 
    apiClient.get<Issue[]>('/issues/', { params }),
  getById: (id: number) => apiClient.get<Issue>(`/issues/${id}/`),
  create: (data: Partial<Issue>) => apiClient.post<Issue>('/issues/', data),
  update: (id: number, data: Partial<Issue>) => 
    apiClient.patch<Issue>(`/issues/${id}/`, data),
};

// Hackathons API
export const hackathonsApi = {
  getAll: () => apiClient.get<Hackathon[]>('/hackathons/'),
  getById: (id: number) => apiClient.get<Hackathon>(`/hackathons/${id}/`),
};

// Leaderboard API
export const leaderboardApi = {
  getTopEarners: () => apiClient.get<LeaderboardEntry[]>('/leaderboard/earners/'),
  getTopBugReporters: () => apiClient.get<LeaderboardEntry[]>('/leaderboard/reporters/'),
  getTopPRContributors: () => apiClient.get<LeaderboardEntry[]>('/leaderboard/contributors/'),
  getTopReferrals: () => apiClient.get<LeaderboardEntry[]>('/leaderboard/referrals/'),
};

// Projects API
export const projectsApi = {
  getAll: () => apiClient.get('/projects/'),
  getById: (id: number) => apiClient.get(`/projects/${id}/`),
};

// Bounties API
export const bountiesApi = {
  getAll: () => apiClient.get('/bounties/'),
  getById: (id: number) => apiClient.get(`/bounties/${id}/`),
};

