import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-container">
      <nav class="navbar">
        <div class="nav-content">
          <h2>Admin Panel</h2>
          <div class="nav-actions">
            <button class="btn btn-outline" (click)="goToDashboard()">Dashboard</button>
            <button class="btn btn-outline" (click)="logout()">Logout</button>
          </div>
        </div>
      </nav>

      <main class="main-content">
        <div class="admin-card">
          <h1>👑 Admin Access</h1>
          <p>This page is only accessible to administrators.</p>
          <div class="admin-features">
            <div class="feature">
              <h3>User Management</h3>
              <p>Manage user accounts and permissions</p>
            </div>
            <div class="feature">
              <h3>System Settings</h3>
              <p>Configure application settings</p>
            </div>
            <div class="feature">
              <h3>Analytics</h3>
              <p>View system analytics and reports</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    @import '../dashboard/dashboard.component.scss';

    .admin-card {
      background: white;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

      h1 {
        margin: 0 0 16px;
        color: #1a202c;
        font-size: 32px;
      }

      p {
        margin: 0 0 32px;
        color: #718096;
        font-size: 16px;
      }
    }

    .admin-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;

      .feature {
        padding: 24px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px;
        color: white;

        h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        p {
          margin: 0;
          font-size: 14px;
          opacity: 0.9;
        }
      }
    }
  `],
})
export class AdminComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout().subscribe();
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
