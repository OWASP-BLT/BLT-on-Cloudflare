/**
 * API Query functions for TanStack Query
 * These functions fetch data from Django REST Framework endpoints
 */

import {
  Domain,
  Hackathon,
  Issue,
  LeaderboardEntry,
  Organization,
  Project,
  TimeLog,
} from '../types';
import { apiClient } from './client';

// Organizations API
export const organizationsApi = {
  getAll: () => apiClient.get<Organization[]>('/organizations/'),
  getById: (id: number) => apiClient.get<Organization>(`/organizations/${id}/`),
  create: (data: Partial<Organization>) =>
    apiClient.post<Organization>('/organizations/', data),
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
  getAll: () => apiClient.get<Hackathon[]>('/hunts/'),
  getActive: () => apiClient.get<Hackathon[]>('/hunts/active/'),
  getUpcoming: () => apiClient.get<Hackathon[]>('/hunts/upcoming/'),
  getById: (id: number) => apiClient.get<Hackathon>(`/hunts/${id}/`),
};

// Leaderboard API
export const leaderboardApi = {
  getGlobal: () => apiClient.get<LeaderboardEntry[]>('/leaderboard/'),
  getFiltered: (params: any) =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/filter/', { params }),
  getMonthly: () =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/group_by_month/'),
  getTopEarners: () =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/top_earners/'),
  getTopBugReporters: () =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/top_bug_reporters/'),
  getTopPRContributors: () =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/top_pr_contributors/'),
  getTopReferrals: () =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/top_referrals/'),
};

// Projects API
export const projectsApi = {
  getAll: () => apiClient.get<Project[]>('/projects/'),
  getById: (id: number) => apiClient.get<Project>(`/projects/${id}/`),
};

// Domains API
export const domainsApi = {
  getAll: () => apiClient.get<Domain[]>('/domain/'),
  getById: (id: number) => apiClient.get<Domain>(`/domain/${id}/`),
};

// Time Logs API
export const timeLogsApi = {
  getAll: () => apiClient.get<TimeLog[]>('/timelogs/'),
  start: (data: Partial<TimeLog>) =>
    apiClient.post<TimeLog>('/timelogs/start/', data),
  stop: (id: number) =>
    apiClient.post<TimeLog>(`/timelogs/${id}/stop/`, {}),
};

