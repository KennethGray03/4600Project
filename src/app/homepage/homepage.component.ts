import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}


