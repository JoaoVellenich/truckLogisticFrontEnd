import { Tire } from "../../type/tireType";
import { backendApi } from "./config";

export async function ChangeTireToNewOne(oldTire: Tire, description: string) {
  const body = {
    tireId: oldTire.id,
    description: description,
  };

  const response = await backendApi.post("/tire/", body);
  return response;
}
