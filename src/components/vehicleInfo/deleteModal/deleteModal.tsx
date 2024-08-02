import { Trash2, X } from "lucide-react";
import { ModalHeader } from "../../modalElements/modalHeader";
import { Button } from "../../button/button";

interface DeleteModalProps {
  closeCreateVehicleModal: () => void;
  plate: string;
}

export function DeleteModal({
  closeCreateVehicleModal,
  plate,
}: DeleteModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <ModalHeader
          close={closeCreateVehicleModal}
          modalName="Deletar Veículo"
        />
        <div className="w-full h-px bg-zinc-300"></div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <span className="text-xl">Confirmar Deletar o veículo de placa:</span>
          <span className="text-xl font-semibold">{plate}</span>
        </div>
        <div className="w-full h-px bg-zinc-300"></div>
        <Button size="medium" variant="secondary">
          <Trash2 />
          Confirmar deleção
        </Button>
      </div>
    </div>
  );
}
