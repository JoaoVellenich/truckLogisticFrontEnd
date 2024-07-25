import { useLocation, useNavigate } from "react-router-dom";
import { NavBarButton } from "./navBarButton/navBarButton";
import { useState } from "react";

export function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  return (
    <div className="flex flex-col bg-zinc-100 h-screen items-center justify-center gap-2 pr-2">
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
