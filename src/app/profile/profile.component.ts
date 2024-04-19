import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  firstName: string | undefined;
  lastName: string | undefined;
  loggedInUsername: string | undefined;
  constructor(
    private http: HttpClient,
    private authService : AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const username = this.authService.getLoggedInUsername();
    console.log(username);
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
}
