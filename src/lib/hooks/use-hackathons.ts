/**
 * Hackathons hooks using TanStack Query
 */

'use client';

import { useQuery } from '@tanstack/react-query';
import { hackathonsApi } from '../api/queries';

export function useHackathons() {
  return useQuery({
    queryKey: ['hackathons'],
    queryFn: () => hackathonsApi.getAll(),
  });
}

export function useHackathon(id: number) {
  return useQuery({
    queryKey: ['hackathons', id],
    queryFn: () => hackathonsApi.getById(id),
    enabled: !!id,
  });
}

