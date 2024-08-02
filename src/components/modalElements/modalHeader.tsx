import { X } from "lucide-react";

interface ModalHeaderProps {
  modalName: string;
  close: () => void;
}

export function ModalHeader({ modalName, close }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-semibold">{modalName}o</span>
      <button onClick={close}>
        <X className="size-5 text-zinc-400" />
      </button>
    </div>
  );
}
