import { backendApi } from "./config";

export async function getTruckDetails() {
  const response = await backendApi.get("/trucks/");
  return response.data;
}

export async function getTruckById(truckId: string) {
  const response = await backendApi.get(`/trucks/${truckId}`);
  return response;
}
