import { useLocation, useNavigate } from "react-router-dom";
import { NavBarButton } from "./navBarButton/navBarButton";
import { useState } from "react";
import { Truck } from "lucide-react";

export function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  return (
    <div className="flex flex-col h-screen bg-zinc-100 items-center justify-center gap-2 pr-2">
      <div className="flex gap-2 bg-zinc-100 py-2 px-2 items-center">
        <div className="flex justify-start items-center">
          <Truck className="text-zinc-700 size-7" />
          <h2 className="text-3xl text-zinc-900">Truckerr</h2>
        </div>
      </div>
      <NavBarButton
        title="Página principal"
        isActive={currentPage.split("/")[1] === "home"}
        onClick={() => {
          navigate("/home");
        }}
      />
      <NavBarButton
        title="Caminhao"
        isActive={currentPage.split("/")[1] === "truck"}
        onClick={() => {
          navigate("/truck");
        }}
      />
      <NavBarButton
        title="Carreta"
        isActive={currentPage.split("/")[1] === "carreta"}
      />
      <NavBarButton
        title="Despesas"
        isActive={currentPage.split("/")[1] === "despesas"}
      />
      <NavBarButton
        title="Configuração"
        isActive={currentPage.split("/")[1] === "carreta"}
      />
    </div>
  );
}
