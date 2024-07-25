import { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navBar/navBar";
import { VehicleSelector } from "../../components/vehicleSelector/vehicleSelector";
import { getTruckById, getTruckDetails } from "../../services/api/truckApi";
import { useParams } from "react-router-dom";

export function Truck() {
  const [trucks, setTrucks] = useState([]);
  const [currTruck, setCurrtruck] = useState();
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

  console.log(currTruck);

  return (
    <div>
      <Header pageName="Caminhào" />
      <div className="flex flex-row flex-1">
        <NavBar />
        <div>
          <VehicleSelector VehicleInfo={trucks} />
        </div>
        <div>{!truckId ? "Selecione um veiculo" : <h2>{truckId}</h2>}</div>
      </div>
    </div>
  );
}
