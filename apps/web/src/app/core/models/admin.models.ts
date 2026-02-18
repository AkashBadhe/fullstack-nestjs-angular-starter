import { User } from './auth.models';

export interface ErrorLog {
  _id: string;
  level: string;
  message: string;
  stack?: string;
  status?: number;
  method?: string;
  url?: string;
  meta?: Record<string, any>;
  createdAt?: string;
}

export type AdminUser = User;
