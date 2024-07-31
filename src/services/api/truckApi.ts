import { CreateTruckBody } from "../../type/truckType";
import { backendApi } from "./config";

export async function getTruckDetails() {
  const response = await backendApi.get("/trucks/");
  return response.data;
}

export async function getTruckById(truckId: string) {
  const response = await backendApi.get(`/trucks/${truckId}`);
  return response;
}

export async function createNewTruck(body: CreateTruckBody) {
  try {
    const response = await backendApi.post("/trucks/create", body);
    return response;
  } catch (err: any) {
    return false;
  }
}
