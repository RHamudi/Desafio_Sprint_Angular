import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   activeRoute: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
    this.activeRoute = this.activatedRoute.snapshot.url.join('/');
    console.log(this.activeRoute);
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
    this.route.navigate(['']);
  }
}
