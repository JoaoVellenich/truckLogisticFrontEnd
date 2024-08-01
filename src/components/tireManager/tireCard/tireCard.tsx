import { useState } from "react";
import { Tire } from "../../../type/tireType";
import { Button } from "../../button/button";
import { ChangeTireModal } from "./changeTireModal";

export interface TireCardProps {
  tire: Tire;
  update: number;
  setUpdate: (update: number) => void;
}

export function TireCard({ tire, update, setUpdate }: TireCardProps) {
  const [isActiveModal, setIsActiveModal] = useState(false);

  return (
    <div className="bg-zinc-100 flex flex-1 flex-col w-full rounded-3xl px-4 py-2 gap-2 justify-center text-center">
      <span>{tire.km.toLocaleString("pt-br")} Km</span>
      <div className="w-full h-px bg-zinc-300"></div>
      <span className="text-xs">Posição: {tire.position}</span>
      <span className="text-xs">{tire.description}</span>
      <div className="w-full h-px bg-zinc-300"></div>
      <div>
        <Button size="smallWFull" onClick={() => setIsActiveModal(true)}>
          Trocar
        </Button>
      </div>

      {isActiveModal && (
        <ChangeTireModal
          closeModal={() => setIsActiveModal(false)}
          km={tire.km}
          position={tire.position}
          tire={tire}
          update={update}
          setUpdate={setUpdate}
        />
      )}
    </div>
  );
}
