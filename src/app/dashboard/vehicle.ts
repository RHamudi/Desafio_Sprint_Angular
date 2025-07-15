export interface VehicleData {
    id: number | string;
    odometro: number | string;
    nivelCombustivel: number | string;
    status: string | null;
    lat: number | string;
    long: number | string;
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