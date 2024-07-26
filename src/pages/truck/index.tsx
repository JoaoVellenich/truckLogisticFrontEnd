import { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar/navBar";
import { VehicleSelector } from "../../components/vehicleSelector/vehicleSelector";
import { getTruckById, getTruckDetails } from "../../services/api/truckApi";
import { useParams } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import { TruckInterface } from "../../type/truckType";
import { VehicleInfo } from "../../components/vehicleInfo/vehicleInfo";
import { FuelTable } from "../../components/fuelTable/fuelTable";

export function Truck() {
  const [trucks, setTrucks] = useState([]);
  const [currTruck, setCurrtruck] = useState<TruckInterface>();
  const { truckId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTruckDetails();
      setTrucks(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (truckId) {
        const response = await getTruckById(truckId);
        if (response.status == 200) {
          setCurrtruck(response.data);
        }
      }
    };
    fetchData();
  }, [truckId]);

  return (
    <div>
      <div className="flex flex-row">
        <NavBar />
        <div>
          <VehicleSelector VehicleInfo={trucks} />
        </div>
        <div className="flex flex-1">
          {!currTruck ? (
            <div className="flex flex-1 flex-col justify-center items-center">
              <ShieldAlert className="size-16" />
              <span className="text-3xl">
                Nenhum caminhão Selecionado, <br />
                por favor selecione um veículo
              </span>
            </div>
          ) : (
            <div className="flex flex-1 items-center">
              <div className="flex flex-1 flex-col w-full h-screen px-4 py-4 gap-2">
                <VehicleInfo truck={currTruck} />
                <div className="w-full h-px bg-zinc-300"></div>
                <div className="flex-1 flex-col w-full h-full overflow-hidden">
                  <FuelTable truck={currTruck} />
                </div>
              </div>
              <div className="w-px h-full bg-zinc-300"></div>
              <div className="flex flex-1 bg-blue-600">b</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
