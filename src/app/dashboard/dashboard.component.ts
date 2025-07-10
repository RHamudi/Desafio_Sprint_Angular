import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestsService } from '../services/requests.service';
import { VehicleData, VehicleList } from './vehicle';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  carList: VehicleList[] = [];
  vehicleData: VehicleData[] = [];
  selectedCar: VehicleList | null = null;
  vinData!: VehicleData;

  listVin = ["2FRHDUYS2Y63NHD22454", "2RFAASDY54E4HDU34874", "2FRHDUYS2Y63NHD22455", "2RFAASDY54E4HDU34875", "2FRHDUYS2Y63NHD22654"]

  constructor(private requests: RequestsService) { }

  ngOnInit() {
    this.requests.vehicleList().subscribe({
      next: (data) => {
        this.carList = data.vehicles;
        this.selectedCar = this.carList[0];
        this.selectVinData();
      }
    });
  }

  @ViewChild(MenuComponent) menuComponent!: MenuComponent;

  backgroundColor: boolean = false;

  onModalStatusChange(status: boolean) {
    this.backgroundColor = status;
  }
  
  handleCloseModal() {
    this.menuComponent.closeModal();
  }

  selectVinData(){
    if(this.selectedCar)
    this.requests.vehicleData(this.listVin[this.selectedCar.id - 1]).subscribe({
      next: (data) => {
        this.vinData = data;
      }
    })
  }

  bgImage = "";

  // get backgroundImage(): { [key: string]: string } {
  //   const imageName = this.selectedCar.img.toLocaleLowerCase().replace(" ", "");;
  //   return {
  //     'background-image': `url(/assets/${imageName}.png)`
  //   };
  // }
  
}
