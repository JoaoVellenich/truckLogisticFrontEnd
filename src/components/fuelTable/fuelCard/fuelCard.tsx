import { Calendar, CircleDollarSign, Fuel, MapPin } from "lucide-react";
import { FuelInterface } from "../../../type/fuel";

interface FuelCardProps {
  fuel: FuelInterface;
}

export function FuelCard({ fuel }: FuelCardProps) {
  return (
    <div className="flex flex-col flex-1 w-full bg-zinc-200 rounded-3xl px-4 py-2 gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-4" />
          <span>{fuel.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{fuel.date.split("T")[0]}</span>
          <Calendar className="size-4" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <CircleDollarSign className="size-4" />
          <span>{fuel.value.toLocaleString("pt-br")}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{fuel.trip.toLocaleString("pt-br")}</span>
          <span>Km</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <span>R$/L {fuel.price.toLocaleString("pt-br")}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{fuel.liters.toLocaleString("pt-br")}</span>
          <Fuel className="size-4" />
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <span>{fuel.kmL.toLocaleString("pt-br")} Km/L</span>
        </div>
      </div>
    </div>
  );
}
