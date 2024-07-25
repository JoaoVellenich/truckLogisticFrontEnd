import { Truck } from "lucide-react";

interface HeaderInterface {
  pageName: string;
}

export function Header({ pageName }: HeaderInterface) {
  return (
    <div className="flex gap-2 bg-zinc-100 py-2 px-2 items-center">
      <div className="flex justify-start items-center">
        <Truck className="text-zinc-700 size-7" />
        <h2 className="text-3xl text-zinc-900">Truckerr</h2>
      </div>
      <div className="w-px h-8 bg-zinc-800"></div>
      <h2 className="text-3xl text-zinc-500">{pageName}</h2>
    </div>
  );
}
