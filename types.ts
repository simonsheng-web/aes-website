import { LucideIcon } from 'lucide-react';

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  price?: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}