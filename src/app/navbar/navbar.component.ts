import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive,} from '@angular/router';
import { TripsComponent } from '../trips/trips.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TripsComponent,LogInComponent,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   
}
