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
  vinData: VehicleData = {
    id: 0,
    lat: 0,
    long: 0,
    nivelCombustivel: 0,
    odometro: 0,
    status: ""
  }

  codigoVin = "";

  constructor(private requests: RequestsService) { }

  ngOnInit() {
    this.requests.vehicleList().subscribe({
      next: (data) => {
        this.carList = data.vehicles;
        this.selectedCar = this.carList[0];
      }
    });
  }

  @ViewChild(MenuComponent) menuComponent!: MenuComponent;

  backgroundColor: boolean = false;

  onChangeVerifyVin(){
    this.requests.vehicleData(this.codigoVin).subscribe({
      next: (data)=> {
        this.vinData = data;
      }
    });
  }

  onModalStatusChange(status: boolean) {
    this.backgroundColor = status;
  }
  
  handleCloseModal() {
    this.menuComponent.closeModal();
  }

  bgImage = "";
}
