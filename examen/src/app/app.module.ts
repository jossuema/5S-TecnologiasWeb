import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { RutasComponent } from './components/rutas/rutas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RutacardComponent } from './components/rutacard/rutacard.component';
import { RutasService } from './services/rutas.service';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    RutasComponent,
    NavbarComponent,
    RutacardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-tnmbc5fqumgznlk8.us.auth0.com',
      clientId: 'K5Ru6CZUktuYHTP4z7ppZCW835IUcX2C',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FormsModule
  ],
  providers: [
     RutasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
