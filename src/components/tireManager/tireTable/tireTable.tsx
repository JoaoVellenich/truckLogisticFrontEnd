import { Tire } from "../../../type/tireType";
import { TireCard } from "../tireCard/tireCard";

interface TireTableProps {
  tires: Tire[];
  axle: number;
  update: number;
  setUpdate: (update: number) => void;
}

export function TireTable({ tires, axle, update, setUpdate }: TireTableProps) {
  const tiresGroups = Math.max(axle - 1, 0);
  return (
    <>
      <div className="flex flex-1 flex-col bg-zinc-200 w-full h-full rounded-3xl px-4 py-2 gap-2 items-center">
        <span className="font-semibold">Eixo Direcional</span>
        <div className="flex w-full gap-2">
          <TireCard update={update} setUpdate={setUpdate} tire={tires[0]} />
          <div className="w-px h-full bg-zinc-300"></div>
          <TireCard update={update} setUpdate={setUpdate} tire={tires[1]} />
        </div>
      </div>
      <>
        {Array.from({ length: tiresGroups }).map((_, index) => {
          const startIndex = index * 4 + 2;
          return (
            <div className="flex flex-1 flex-col bg-zinc-200 w-full h-full rounded-3xl px-4 py-2 gap-2 items-center">
              <span className="font-semibold">Eixo da tração: {index + 1}</span>
              <div className="flex w-full gap-2">
                <TireCard
                  update={update}
                  setUpdate={setUpdate}
                  tire={tires[startIndex]}
                />
                <TireCard
                  update={update}
                  setUpdate={setUpdate}
                  tire={tires[startIndex + 1]}
                />
                <div className="w-px h-full bg-zinc-300"></div>
                <TireCard
                  update={update}
                  setUpdate={setUpdate}
                  tire={tires[startIndex + 2]}
                />
                <TireCard
                  update={update}
                  setUpdate={setUpdate}
                  tire={tires[startIndex + 3]}
                />
              </div>
            </div>
          );
        })}
      </>
    </>
  );
}
