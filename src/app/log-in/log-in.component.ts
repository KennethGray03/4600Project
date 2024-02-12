import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  username: string = ''; // Initialize the property directly
  password: string = ''; // Initialize the property directly

  onSubmit() {
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
  }
}
