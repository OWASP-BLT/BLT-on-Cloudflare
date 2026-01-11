/**
 * TypeScript type definitions matching Django models
 * Single source of truth for all types
 */

export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  is_staff?: boolean;
  is_active?: boolean;
  date_joined?: string;
  avatar?: string;
}

export interface Organization {
  id: number;
  name: string;
  description?: string;
  website?: string;
  logo?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'resolved' | 'closed';
  severity: 'low' | 'medium' | 'high' | 'critical';
  reporter: number;
  reporter_username?: string;
  organization?: number;
  organization_name?: string;
  domain?: string;
  created_at: string;
  updated_at: string;
  likes_count?: number;
}

export interface Hackathon {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: 'active' | 'upcoming' | 'ended';
  organizer: number;
  organizer_name?: string;
  created_at: string;
}

export interface LeaderboardEntry {
  user: {
    id: number;
    username: string;
    avatar?: string;
  };
  score: number;
  rank: number;
  value?: string; // For display purposes
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  github_url?: string;
  stars?: number;
  created_at?: string;
}

export interface Bounty {
  id: number;
  title: string;
  description: string;
  amount: number;
  status: 'open' | 'claimed' | 'closed';
  organization?: number;
  issue?: number;
  created_at: string;
}

export interface Domain {
  id: number;
  name: string;
  url: string;
  description?: string;
}

export interface TimeLog {
  id: number;
  user: number;
  start_time: string;
  end_time?: string;
  duration?: string;
  task_description?: string;
}

export interface Tag {
  id: number;
  name: string;
  description?: string;
}
