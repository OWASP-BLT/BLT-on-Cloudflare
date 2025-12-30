/**
 * Leaderboard hooks using TanStack Query
 */

'use client';

import { useQuery } from '@tanstack/react-query';
import { leaderboardApi } from '../api/queries';

export function useTopEarners() {
  return useQuery({
    queryKey: ['leaderboard', 'earners'],
    queryFn: () => leaderboardApi.getTopEarners(),
  });
}

export function useTopBugReporters() {
  return useQuery({
    queryKey: ['leaderboard', 'reporters'],
    queryFn: () => leaderboardApi.getTopBugReporters(),
  });
}

export function useTopPRContributors() {
  return useQuery({
    queryKey: ['leaderboard', 'contributors'],
    queryFn: () => leaderboardApi.getTopPRContributors(),
  });
}

export function useTopReferrals() {
  return useQuery({
    queryKey: ['leaderboard', 'referrals'],
    queryFn: () => leaderboardApi.getTopReferrals(),
  });
}

