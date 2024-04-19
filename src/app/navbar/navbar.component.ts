import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive,} from '@angular/router';
import { TripsComponent } from '../trips/trips.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TripsComponent,LogInComponent,RouterOutlet,HttpClientModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: string | null = null; // Initialize username property

  constructor(public authService: AuthService, public router: Router) {}

  
  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}

