import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  profile$ = this.auth.user$;
  constructor(private router: Router, public auth: AuthService){
    
  }

  login(): void {
    this.auth.loginWithRedirect({
      appState: { target: '/protegida' }
    });
  }

  logout(): void {
    this.auth.logout();
  }
}
