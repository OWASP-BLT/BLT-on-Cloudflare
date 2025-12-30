/**
 * Issues hooks using TanStack Query
 */

'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { issuesApi, Issue } from '../api/queries';

export function useIssues(params?: { organization?: number; status?: string }) {
  return useQuery({
    queryKey: ['issues', params],
    queryFn: () => issuesApi.getAll(params),
  });
}

export function useIssue(id: number) {
  return useQuery({
    queryKey: ['issues', id],
    queryFn: () => issuesApi.getById(id),
    enabled: !!id,
  });
}

export function useCreateIssue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Issue>) => issuesApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
    },
  });
}

export function useUpdateIssue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Issue> }) =>
      issuesApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
      queryClient.invalidateQueries({ queryKey: ['issues', variables.id] });
    },
  });
}

