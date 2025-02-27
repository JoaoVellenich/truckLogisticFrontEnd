import { Company } from "./companyType";
import { Tire } from "./tireType";

export interface TruckInterface {
  id: string;
  company: Company;
  plate: string;
  description: string;
  tires: Tire[];
  km: number;
  numberOfAxle: number;
  expenses: null;
}

export interface CreateTruckBody {
  plate: string;
  description: string;
  km: number;
  hasNewTires: boolean;
  numberOfAxle: number;
}
