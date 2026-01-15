"use client";
import { UserProfile } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export function useUserProfile(username: string) {
  return useQuery<UserProfile>({
    queryKey: ['user-profile', username],
    queryFn: async () => {
      const res = await fetch(`/api/users/${username}`);
      if (!res.ok) throw new Error('Failed to fetch profile');
      return res.json();
    },
    enabled: Boolean(username),
  });
}
