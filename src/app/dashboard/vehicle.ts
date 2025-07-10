export interface VehicleData {
    id: number;
    odometro: number;
    nivelCombustivel: number;
    status: string;
    lat: number;
    long: number;
}

export interface VehicleList {
    id: number;
    vehicle: string;
    volumetotal: number;
    connected: number;
    softwareUpdates: number;
    img: string;
}

export interface VehicleListResponse {
  vehicles: VehicleList[];
}