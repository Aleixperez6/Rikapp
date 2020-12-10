import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SocialComponent } from './components/social/social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './components/personajes/item/item.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CharacterFilterPipe, CharacterFilterPipeSpecies, CharacterFilterPipeStatus } from './pipes/character-filter.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from './material/material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { BackItemComponent } from './components/personajes/item/back-item';
import { FrontItemComponent } from './components/personajes/item/front-item';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    SocialComponent,
    ItemComponent,
    ContactoComponent,
    CharacterFilterPipe,
    CharacterFilterPipeSpecies,
    CharacterFilterPipeStatus,
    SideNavComponent,
    HeaderToolbarComponent,
    BackItemComponent,
    FrontItemComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule






  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
