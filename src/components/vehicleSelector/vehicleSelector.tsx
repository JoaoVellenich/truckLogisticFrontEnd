import { Plus } from "lucide-react";
import { Button } from "../button/button";
import { VehicleCard } from "./veichleCard/vehicleCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreateVehicleModal } from "../createVehicleModal/createVehicleModal";

interface VehicleInfo {
  id: string;
  plate: string;
  description: string;
  km: number;
}

interface VehicleSelectorProps {
  VehicleInfo: VehicleInfo[];
}

export function VehicleSelector({ VehicleInfo }: VehicleSelectorProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpenCreateVehicleModal, setIsOpenCreateVehicleModal] =
    useState(false);

  return (
    <div className="flex flex-col h-screen max-h-screen bg-zinc-50 px-4 py-2 gap-2 overflow-y-scroll">
      <Button onClick={() => setIsOpenCreateVehicleModal(true)}>
        <Plus className="size-5" />
        Criar
      </Button>
      {VehicleInfo.length > 0 ? (
        VehicleInfo.map((vehicle) => {
          return (
            <VehicleCard
              key={vehicle.id}
              onClick={() => {
                navigate(`/truck/${vehicle.id}`);
              }}
              Vehicle={vehicle}
              isActive={location.pathname.split("/")[2] == vehicle.id}
            />
          );
        })
      ) : (
        <h2>Não tem</h2>
      )}

      {isOpenCreateVehicleModal && (
        <CreateVehicleModal
          closeCreateVehicleModal={() => setIsOpenCreateVehicleModal(false)}
        />
      )}
    </div>
  );
}
