import { TruckInterface } from "../../type/truckType";
import { Button } from "../button/button";

interface VehicleInfoProps {
  truck: TruckInterface;
}

export function VehicleInfo({ truck }: VehicleInfoProps) {
  return (
    <div className="flex flex-col w-full bg-zinc-100 rounded-3xl px-4 py-2 gap-2">
      <div className="flex flex-1 w-full justify-between text-center items-center">
        <span className="font-semibold">Placa</span>
        <span>{truck.plate}</span>
      </div>
      <div className="w-full h-px bg-zinc-300"></div>
      <div className="flex flex-1 w-full justify-between text-center items-center">
        <span className="font-semibold">Descrição</span>
        <span>{truck.description}</span>
      </div>
      <div className="w-full h-px bg-zinc-300"></div>
      <div className="flex flex-1 w-full justify-between text-center items-center">
        <span className="font-semibold">Odometro</span>
        <span>{truck.km.toLocaleString("pt-br")}</span>
      </div>
      <div className="w-full h-px bg-zinc-300"></div>
      <Button size="medium" variant="secondary">
        Apagar
      </Button>
    </div>
  );
}
