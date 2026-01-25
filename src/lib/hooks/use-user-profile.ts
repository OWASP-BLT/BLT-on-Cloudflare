"use client";
import { apiClient } from '@/lib/api/client';
import { UserProfile } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export function useUserProfile(username: string) {
  return useQuery<UserProfile>({
    queryKey: ['user-profile', username],
    queryFn: async () => {
      // ✅ FIXED: Use apiClient instead of fetch to get cookie handling, token refresh, and error interceptors
      return apiClient.get<UserProfile>(`/users/${username}/`);
    },
    enabled: Boolean(username),
  });
}
