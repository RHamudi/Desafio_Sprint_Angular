import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild(MenuComponent) menuComponent!: MenuComponent;

  backgroundColor: boolean = false;

  onModalStatusChange(status: boolean) {
    this.backgroundColor = status;
  }
  
  handleCloseModal() {
    this.menuComponent.closeModal();
  }

  cars = [
    {model: "Ranger", totalVendas: 6700, conectados: 300, update: 600},
    {model: "Mustang", totalVendas: 2000, conectados: 345, update: 600},
    {model: "Territory", totalVendas: 8000, conectados: 700, update: 600},
    {model: "Bronco Sport", totalVendas: 3500, conectados: 567, update: 600}
  ]

  selectedCar = this.cars[0];

  bgImage = "";

  get backgroundImage(): { [key: string]: string } {
    const imageName = this.selectedCar.model.toLocaleLowerCase().replace(" ", "");;
    console.log(imageName)
    return {
      'background-image': `url(/assets/${imageName}.png)`
    };
  }
  
}
