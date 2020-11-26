import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SocialComponent } from './components/social/social.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ChardetailComponent } from './components/personajes/chardetail/chardetail.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './components/personajes/item/item.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    SocialComponent,
    ContactoComponent,
    ChardetailComponent,
    ItemComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
