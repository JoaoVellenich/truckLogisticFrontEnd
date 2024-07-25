import { ComponentProps, useState } from "react";

interface VehicleInfo {
  id: string;
  plate: string;
  description: string;
  km: number;
}

interface VehicleCardProps extends ComponentProps<"button"> {
  Vehicle: VehicleInfo;
  isActive: boolean;
}

export function VehicleCard({ Vehicle, isActive, ...props }: VehicleCardProps) {
  return (
    <button
      {...props}
      className={`w-40 justify-center items-center text-center rounded-3xl px-4 py-2 hover:bg-lime-100 ${
        isActive ? "bg-lime-300" : ""
      }`}
    >
      <div>{Vehicle.plate}</div>
      <div className="flex flex-col justify-center">
        <span className="text-xs">KM {Vehicle.km}</span>
        <span className="text-xs overflow-hidden text-ellipsis">
          {Vehicle.description}
        </span>
      </div>
    </button>
  );
}
