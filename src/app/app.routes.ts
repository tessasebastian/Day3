import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NewsComponent } from './pages/news/news.component';
import { AerospaceComponent } from './pages/aerospace/aerospace.component';
import { BankingComponent } from './pages/banking/banking.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { LocomotiveComponent } from './pages/locomotive/locomotive.component';
import { PodcastComponent } from './pages/podcast/podcast.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    { path:'contact',component:ContactComponent },
    {path:'locomotive',component:LocomotiveComponent },
    {path:'about',component:AboutComponent},
    {path:'insurance',component:InsuranceComponent},
    {path:'news' ,component:NewsComponent},
    {path:'aerospace', component:AerospaceComponent},
    {path:'banking',component:BankingComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'healthcare',component:HealthcareComponent},
    {path:'podcast',component:PodcastComponent}
  


];
