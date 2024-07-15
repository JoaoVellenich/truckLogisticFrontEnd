import { Truck } from "lucide-react";

export function Logo() {
  return (
    <div className="max-w-3xl w-full flex flex-col justify-center items-center space-y-2.5">
      <Truck className="text-zinc-700 size-9" />
      <h2 className="text-3xl text-zinc-900">Truckerr</h2>
      <p>Gerencie e controle a sua frota</p>
    </div>
  );
}
