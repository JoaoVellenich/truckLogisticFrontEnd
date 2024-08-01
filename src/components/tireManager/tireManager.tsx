import { Tire } from "../../type/tireType";
import { TireTable } from "./tireTable/tireTable";

interface TireManagerProps {
  tires: Tire[];
  axle: number;
  update: number;
  setUpdate: (update: number) => void;
}

export function TireManager({
  tires,
  axle,
  update,
  setUpdate,
}: TireManagerProps) {
  return (
    <div className="flex flex-1 flex-col w-full justify items-center bg-zinc-100 rounded-3xl px-4 py-2 gap-2">
      <h2 className="font-semibold">Gerencie os pneus</h2>
      <div className="w-full h-px bg-zinc-300"></div>
      <div className="flex flex-col w-full gap-2">
        {tires.length > 0 ? (
          <TireTable
            update={update}
            setUpdate={setUpdate}
            tires={tires}
            axle={axle}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
