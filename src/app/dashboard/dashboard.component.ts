import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cars = [
    {model: "ranger"},
    {model: "mustang"},
    {model: "territory"},
    {model: "broncoSport"}
  ]

  selectedCar = this.cars[0];

  bgImage = "";

  togleBg(imageName: string) {
    this.bgImage = imageName;
  }
}
