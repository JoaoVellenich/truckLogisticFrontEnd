import { backendApi } from "./config";

export async function getFuelPage(truckId: string, page: number, size: number) {
  const response = await backendApi.post("/fuel/getFuel", {
    truckId,
    page,
    size,
  });
  return response;
}
