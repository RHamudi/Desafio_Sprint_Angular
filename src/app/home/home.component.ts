import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showModal = false;

  
  toggleModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
