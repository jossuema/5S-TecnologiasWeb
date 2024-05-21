import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {'class': 'app-home'}
})
export class AppComponent {
  title = 'auth0';
}
