import { afterRender, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor() {
    afterRender(() => {
      window.addEventListener('scroll', () => {
        let header = document.querySelector('.tete') as HTMLElement;

        header.classList.toggle('sticky', window.scrollY > 2);
      });
    });
  }
  menu() {
    let menu = document.querySelector('#menu-icon');
    let navBar = document.querySelector('.nav-bar');

    console.log(menu);

    menu?.classList.toggle('bx-x');
    navBar?.classList.toggle('open');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    window.location.href = '/';
  }
}
