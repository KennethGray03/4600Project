import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TripsComponent } from './trips/trips.component';
import { LogInComponent } from './log-in/log-in.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { RentalComponent } from './rental/rental.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PicturesComponent } from './pictures/pictures.component';





export const routes: Routes = 
[
    {path:'', component: HomepageComponent},
    {path: 'trips', component:TripsComponent},
    {path: 'login', component:LogInComponent},
    {path: 'checkout', component:CheckoutComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'rental', component:RentalComponent},
    {path: 'wishlist', component:WishlistComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'homepage', component:HomepageComponent},
    {path: 'signup', component:SignUpComponent},
    {path: 'pictures', component:PicturesComponent}
 
];


