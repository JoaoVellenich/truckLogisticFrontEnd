import { Caravan, Truck, X } from "lucide-react";
import { useState } from "react";
import { CreateTruck } from "./createTruck/createTruck";
import { CreateTrailer } from "./createTrailer/createtrailer";

interface CreateTruckModalProps {
  closeCreateVehicleModal: () => void;
}

export function CreateVehicleModal({
  closeCreateVehicleModal,
}: CreateTruckModalProps) {
  const [isCreateTruck, setIsCreateTruck] = useState(true);
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Cadastrar Veículo</span>
          <button onClick={closeCreateVehicleModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <div className="flex flex-1 w-full">
          <button
            onClick={() => setIsCreateTruck(true)}
            className={`flex items-center justify-center w-full py-1 ${
              isCreateTruck ? `bg-lime-400` : `bg-lime-300`
            } rounded-l-3xl`}
          >
            <Truck />
            Caminhão
          </button>
          <button
            onClick={() => setIsCreateTruck(false)}
            className={`flex items-center justify-center w-full py-1 ${
              !isCreateTruck ? `bg-lime-400` : `bg-lime-300`
            } rounded-r-3xl`}
          >
            <Caravan />
            Carreta
          </button>
        </div>
        {isCreateTruck ? (
          <CreateTruck closeCreateTruckModal={closeCreateVehicleModal} />
        ) : (
          <CreateTrailer />
        )}
      </div>
    </div>
  );
}
