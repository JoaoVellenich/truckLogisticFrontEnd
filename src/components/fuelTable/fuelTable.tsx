import {
  CirclePlus,
  CircleX,
  MoveLeft,
  MoveRight,
  ShieldAlert,
} from "lucide-react";
import { Button } from "../button/button";
import { FuelCard } from "./fuelCard/fuelCard";
import { TruckInterface } from "../../type/truckType";
import { useEffect, useState } from "react";
import { getFuelPage } from "../../services/api/fuel";
import { FuelInterface } from "../../type/fuel";
import { CreateFuelModal } from "./createFuelModal/fuelModal";

interface FuelTableProps {
  truck: TruckInterface;
  update: number;
  setUpdate: (update: number) => void;
}

export function FuelTable({ truck, update, setUpdate }: FuelTableProps) {
  const [isOpenCreateFuelModal, setIsOpenCreateFuelModal] = useState(false);

  const [fuels, setFuels] = useState<FuelInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getFuelPage(truck.id, 0, 7);
      if (response.status == 200) {
        const fuelsFound: FuelInterface[] = [];
        response.data.content.map((fuel: any) => {
          fuelsFound.push(fuel);
        });
        setFuels(fuelsFound);
        setMaxPage(response.data.totalPages);
      } else {
        setErr("Erro tente novamente");
      }
      setIsLoading(false);
    };
    setErr("");
    fetchData();
  }, [truck]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getFuelPage(truck.id, currPage, 7);
      if (response.status == 200) {
        const fuelsFound: FuelInterface[] = [];
        response.data.content.map((fuel: any) => {
          fuelsFound.push(fuel);
        });
        setFuels(fuelsFound);
        setMaxPage(response.data.totalPages);
      } else {
        setErr("Erro tente novamente");
      }
      setIsLoading(false);
    };
    setErr("");
    fetchData();
  }, [currPage, isOpenCreateFuelModal]);

  return (
    <div className="flex flex-1 flex-col w-full h-full bg-zinc-100 rounded-3xl px-4 py-2 gap-2">
      <div className="flex w-full justify-between items-center text-center">
        <span className="font-semibold">Combustivel</span>
        <Button
          size="small"
          onClick={() => {
            setIsOpenCreateFuelModal(true);
          }}
        >
          <CirclePlus className="size-5" />
          Cadastrar
        </Button>
      </div>
      <div className="w-full h-px bg-zinc-300"></div>
      <div className="flex flex-1 flex-col w-full overflow-y-auto">
        {err ? (
          <div className="flex flex-1 flex-col justify-center items-center">
            <CircleX className="size-8" />
            <span className="text-2xl">{err}</span>
          </div>
        ) : fuels.length <= 0 ? (
          <div className="flex flex-1 flex-col justify-center items-center">
            <ShieldAlert className="size-8" />
            <span className="text-2xl">Nenhum abastecimento cadastrado</span>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {fuels.map((fuel) => {
              return <FuelCard key={fuel.id} fuel={fuel} />;
            })}
          </div>
        )}
      </div>
      <div className="flex w-full justify-between">
        <button
          onClick={() => {
            if (currPage >= 1) {
              setCurrPage(currPage - 1);
            }
          }}
        >
          <MoveLeft />
        </button>
        <span>
          {fuels.length <= 0 ? 0 : currPage + 1} / {maxPage}
        </span>
        <button
          onClick={() => {
            if (currPage < maxPage - 1) {
              setCurrPage(currPage + 1);
            }
          }}
        >
          <MoveRight />
        </button>
      </div>

      {isOpenCreateFuelModal && (
        <CreateFuelModal
          update={update}
          setUpdate={setUpdate}
          closeCreateFuelModal={() => setIsOpenCreateFuelModal(false)}
          truckId={truck.id}
        />
      )}
    </div>
  );
}
