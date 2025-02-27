import { CircleHelp, CreditCard, LifeBuoy } from "lucide-react";
import { useState } from "react";
import { Button } from "../../button/button";
import { createNewTruck } from "../../../services/api/truckApi";
import { CreateTruckBody } from "../../../type/truckType";
import { ErrorMessage } from "../../errorMessage/errorMessage";

interface CreateTruckProps {
  closeCreateTruckModal: () => void;
  update: number;
  setUpdate: (update: number) => void;
}

export function CreateTruck({
  closeCreateTruckModal,
  update,
  setUpdate,
}: CreateTruckProps) {
  const [plate, setPlate] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfAxle, setNumberOfAxle] = useState(0);
  const [km, setKm] = useState(0);
  const [hasNewTires, setHasNewTires] = useState(true);

  const [err, setErr] = useState("");

  async function createTruck() {
    setErr("");
    if (!plate || !description || !numberOfAxle || !km) {
      setErr("Preencha os campos corretamente");
      return;
    }
    const body: CreateTruckBody = {
      plate,
      description,
      km,
      hasNewTires,
      numberOfAxle,
    };
    const response = await createNewTruck(body);
    if (!response) {
      setErr("Dados errados");
      return;
    }
    setUpdate(update + 1);
    closeCreateTruckModal();
  }

  return (
    <div className="flex flex-1 w-full flex-col justify-center items-center gap-2">
      <div>
        <span className="font-semibold">Criar Caminhão</span>
      </div>
      <ErrorMessage message={err} />
      <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
        <CreditCard className="size-4" />
        <input
          type="text"
          placeholder="Placa"
          className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
          onChange={(e) => setPlate(e.target.value)}
        />
      </div>
      <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
        <CircleHelp className="size-4" />
        <input
          type="text"
          placeholder="Descrição"
          className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-1 w-full gap-2">
        <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
          <LifeBuoy className="size-4" />
          <input
            type="number"
            placeholder="Eixos"
            className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
            onChange={(e) => setNumberOfAxle(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
          <input
            type="number"
            placeholder="Odometro"
            className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
            onChange={(e) => setKm(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2 justify-between">
        <span>Pneus novos</span>
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={hasNewTires}
            className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
            onChange={(e) => setHasNewTires(e.target.checked)}
          />
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <Button
          variant="secondary"
          size="medium"
          onClick={closeCreateTruckModal}
        >
          Cancelar
        </Button>
        <Button size="medium" onClick={createTruck}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
}
