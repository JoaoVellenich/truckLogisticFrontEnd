import { Calendar, CircleDollarSign, MapPin, X } from "lucide-react";
import { Button } from "../../button/button";
import { useState } from "react";
import { createFuel } from "../../../services/api/fuel";
import { ErrorMessage } from "../../errorMessage/errorMessage";

interface CreateFuelModalProps {
  update: number;
  setUpdate: (update: number) => void;
  closeCreateFuelModal: () => void;
  truckId: string;
}

export function CreateFuelModal({
  closeCreateFuelModal,
  truckId,
  setUpdate,
  update,
}: CreateFuelModalProps) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [km, setKm] = useState(0);

  const [err, setErr] = useState("");

  async function create() {
    setErr("");
    if (!date || !value || !km || !price || !location) {
      setErr("Preencha os campos");
      return;
    }

    const body = {
      truckId,
      date,
      value,
      km,
      price,
      location,
    };
    const response = await createFuel(body);
    if (response.status == 200) {
      setUpdate(update + 1);
      closeCreateFuelModal();
      return;
    } else {
      return;
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Cadastrar abastecimento</span>
          <button onClick={closeCreateFuelModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        {err && (
          <div className="flex justify-center items-center">
            <ErrorMessage message={err} />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-1 w-full gap-2">
            <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
              <MapPin className="size-4" />
              <input
                type="text"
                placeholder="Cidade"
                className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
              <Calendar className="size-4" />
              <input
                type="datetime-local"
                placeholder="Data"
                className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-1 w-full gap-2">
            <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
              <CircleDollarSign className="size-4" />
              <input
                type="number"
                placeholder="Valor Total"
                className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
                onChange={(e) => setValue(parseFloat(e.target.value))}
              />
            </div>
            <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
              <CircleDollarSign className="size-4" />
              <input
                type="number"
                placeholder="Preço do litro"
                className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
            <CircleDollarSign className="size-4" />
            <input
              type="number"
              placeholder="Odometro"
              className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
              onChange={(e) => setKm(parseFloat(e.target.value))}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="medium"
              onClick={closeCreateFuelModal}
            >
              Cancelar
            </Button>
            <Button size="medium" onClick={create}>
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
