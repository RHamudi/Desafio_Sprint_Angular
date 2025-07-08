import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   activeRoute: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.activeRoute = this.activatedRoute.snapshot.url.join('/');
  }

  @Output() modalStatusChange = new EventEmitter<boolean>();

  showModal = false;

  toggleModal() {
    this.showModal = true;
    this.modalStatusChange.emit(this.showModal);
  }

  closeModal() {
    this.showModal = false;
    this.modalStatusChange.emit(this.showModal);
  }

  logout() {
    this.authService.logout();
  }
}
