import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root', // HTML selector used to bind the component to the HTML file (index.html)
  templateUrl: './app.component.html', // HTML template file associated w/ the component
  styleUrls: ['./app.component.css'] // CSS file associated w/ the component
})
export class AppComponent {
  title = 'Contact List App';
}
