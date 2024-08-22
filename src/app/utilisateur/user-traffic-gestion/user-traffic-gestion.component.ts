import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-traffic-gestion',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './user-traffic-gestion.component.html',
  styleUrl: './user-traffic-gestion.component.css'
})
export class UserTrafficGestionComponent {

}
