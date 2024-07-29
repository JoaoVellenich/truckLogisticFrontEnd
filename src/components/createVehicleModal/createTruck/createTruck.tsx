import { CircleHelp, CreditCard, LifeBuoy } from "lucide-react";
import { useState } from "react";
import { Button } from "../../button/button";

interface CreateTruckProps {
  closeCreateTruckModal: () => void;
}

export function CreateTruck({ closeCreateTruckModal }: CreateTruckProps) {
  const [plate, setPlate] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfAxle, setNumberOfAxle] = useState(0);
  const [km, setKm] = useState(0);
  const [hasNewTires, setHasNewTires] = useState(true);

  return (
    <div className="flex flex-1 w-full flex-col justify-center items-center gap-2">
      <div>
        <span className="font-semibold">Criar Caminhão</span>
      </div>
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
        <Button size="medium" onClick={() => {}}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
}
