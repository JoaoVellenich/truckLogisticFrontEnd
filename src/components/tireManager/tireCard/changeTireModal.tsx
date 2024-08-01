import { ArrowLeftRight, Hash, X } from "lucide-react";
import { Button } from "../../button/button";
import { useState } from "react";
import { ChangeTireToNewOne } from "../../../services/api/tire";
import { Tire } from "../../../type/tireType";
import { ErrorMessage } from "../../errorMessage/errorMessage";

interface ChangeTireModalProps {
  closeModal: () => void;
  km: number;
  position: number;
  tire: Tire;
  update: number;
  setUpdate: (update: number) => void;
}

export function ChangeTireModal({
  closeModal,
  km,
  position,
  tire,
  update,
  setUpdate,
}: ChangeTireModalProps) {
  const [description, setDescription] = useState("");
  const [err, setErr] = useState("");

  async function changeTire() {
    setErr("");
    if (!description) {
      setErr("Preencha a descrição");
      return;
    }

    const response = await ChangeTireToNewOne(tire, description);
    if (response.status !== 200) {
      setErr(response.data);
    } else {
      setUpdate(update + 1);
      closeModal();
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Trocar Pneu</span>
          <button onClick={closeModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <div className="w-full h-px bg-zinc-300"></div>
        <div>
          <span className="font-semibold">Pneu em uso</span>
          <div className="flex items-center justify-between">
            <span>
              <span className="font-semibold">KM:</span>{" "}
              {km.toLocaleString("pt-br")}
            </span>
            <span>
              <span className="font-semibold">Posiçào:</span> {position}
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-300"></div>
        <ErrorMessage message={err} />
        <div className="flex flex-row w-full bg-zinc-50 rounded-3xl px-2 py-2 items-center gap-2">
          <Hash className="size-4" />
          <input
            type="text"
            placeholder="Descrição"
            className="bg-transparent text-l placeholder-zinc-400 outline-none flex-1"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full">
          <Button variant="secondary" size="medium">
            <X className="size-5" />
            Cancelar
          </Button>
          <Button size="medium" onClick={changeTire}>
            <ArrowLeftRight />
            Trocar
          </Button>
        </div>
      </div>
    </div>
  );
}
