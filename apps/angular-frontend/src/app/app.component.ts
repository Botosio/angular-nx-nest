import { Component } from '@angular/core';
import { AuthService } from '@core/auth';
@Component({
  selector: 'angular-nx-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-frontend';

  constructor(private authService: AuthService) {}
}
