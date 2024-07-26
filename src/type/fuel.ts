export interface FuelInterface {
  id: string;
  date: string;
  value: number;
  km: number;
  trip: number;
  kmL: number;
  price: number;
  liters: number;
  location: string;
}

export interface CreateFuel {
  truckId: string;
  date: string;
  value: number;
  km: number;
  price: number;
  location: string;
}
