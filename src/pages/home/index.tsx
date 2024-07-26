import { MonthInfo } from "../../components/monthInfo/monthInfo";
import { NavBar } from "../../components/navBar/navBar";

export function Home() {
  return (
    <div>
      <div className="flex flex-row">
        <NavBar />
        <div className="flex flex-col items-center flex-1">
          <MonthInfo />
        </div>
      </div>
    </div>
  );
}
