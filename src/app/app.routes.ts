import { Route } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ChardetailComponent } from './components/personajes/chardetail/chardetail.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SocialComponent } from './components/social/social.component';



export const APP_ROUTES: Route[] = [

    { path: 'home', component: HomeComponent },
    { path: 'characters', component: PersonajesComponent },
    { path: 'characters/:id', component: ChardetailComponent },
    { path: 'social', component: SocialComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }

  ];