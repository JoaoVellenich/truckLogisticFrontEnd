import { CreateFuel } from "../../type/fuel";
import { backendApi } from "./config";

export async function getFuelPage(truckId: string, page: number, size: number) {
  const response = await backendApi.post("/fuel/getFuel", {
    truckId,
    page,
    size,
  });
  return response;
}

export async function createFuel(requestBody: CreateFuel) {
  try {
    const response = await backendApi.post("/fuel/", requestBody);
    return response;
  } catch (err: any) {
    return err.response;
  }
}
