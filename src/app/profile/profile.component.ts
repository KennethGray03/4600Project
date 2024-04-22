import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { RentalService } from '../rentalservice.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  firstName: string | undefined;
  lastName: string | undefined;
  loggedInUsername: string | undefined;
  rentals: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private rentalService: RentalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loggedInUsername = this.authService.getLoggedInUsername();
    if (this.loggedInUsername) {
      this.loadUserProfile(this.loggedInUsername);
      this.loadUserRentals(this.loggedInUsername);
    } else {
      console.error('Username not found');
    }
  }

  loadUserProfile(username: string): void {
    this.http.get<any>(`http://localhost:8080/user/${username}`).subscribe(
      (user) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
      },
      (error) => {
        console.error('Error retrieving user profile:', error);
      }
    );
  }

  loadUserRentals(username: string): void {
    this.rentalService.getRentalsByUsername(username).subscribe(
      (rentals) => {
        this.rentals = rentals;
        console.log(rentals);
      },
      (error) => {
        console.error('Error retrieving user rentals:', error);
      }
    );
  }
}