import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/auth.models';
import { AdminUser, ErrorLog } from '../models/admin.models';
import { UserRole } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getUsers(): Observable<AdminUser[]> {
    return this.http
      .get<ApiResponse<AdminUser[]>>(`${this.apiUrl}/users`, {
        withCredentials: true,
      })
      .pipe(map((res) => res.data || []));
  }

  updateUser(id: string, payload: Partial<{ roles: UserRole[]; isActive: boolean }>): Observable<AdminUser> {
    return this.http
      .patch<ApiResponse<AdminUser>>(`${this.apiUrl}/users/${id}`, payload, {
        withCredentials: true,
      })
      .pipe(map((res) => res.data));
  }

  getErrorLogs(limit = 50): Observable<ErrorLog[]> {
    return this.http
      .get<ApiResponse<ErrorLog[]>>(`${this.apiUrl}/logs`, {
        params: { limit },
        withCredentials: true,
      })
      .pipe(map((res) => res.data || []));
  }
}
