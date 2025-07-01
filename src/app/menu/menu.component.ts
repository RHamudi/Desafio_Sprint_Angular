import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private route: Router) {}

  showModal = false;

  toggleModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  logout() {
    this.route.navigate(['']);
  }
}
