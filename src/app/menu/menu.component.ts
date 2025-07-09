import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   activeRoute: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private loginServices: LoginService) {
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
    this.loginServices.logout();
  }
}
