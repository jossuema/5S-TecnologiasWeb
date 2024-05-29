import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from '@auth0/auth0-angular';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreciosComponent,
    NavbarComponent,
    ProtegidaComponent,
    ProtegidaComponent,
    TemplateFormsComponent,
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
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
