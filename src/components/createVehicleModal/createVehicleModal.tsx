import { Caravan, Truck, X } from "lucide-react";
import { useState } from "react";
import { CreateTruck } from "./createTruck/createTruck";
import { CreateTrailer } from "./createTrailer/createtrailer";
import { ModalHeader } from "../modalElements/modalHeader";

interface CreateTruckModalProps {
  closeCreateVehicleModal: () => void;
  update: number;
  setUpdate: (update: number) => void;
}

export function CreateVehicleModal({
  closeCreateVehicleModal,
  update,
  setUpdate,
}: CreateTruckModalProps) {
  const [isCreateTruck, setIsCreateTruck] = useState(true);
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <ModalHeader
          close={closeCreateVehicleModal}
          modalName="Cadastrar Veículo"
        />
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
          <CreateTruck
            closeCreateTruckModal={closeCreateVehicleModal}
            update={update}
            setUpdate={setUpdate}
          />
        ) : (
          <CreateTrailer />
        )}
      </div>
    </div>
  );
}
