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
        isActive={currentPage === "/home"}
        onClick={() => {
          navigate("/home");
        }}
      />
      <NavBarButton
        title="Caminhao"
        isActive={currentPage === "/truck"}
        onClick={() => {
          navigate("/truck");
        }}
      />
      <NavBarButton title="Carreta" isActive={currentPage === "/carreta"} />
      <NavBarButton title="Despesas" isActive={currentPage === "/despesas"} />
      <NavBarButton
        title="Configuração"
        isActive={currentPage === "/carreta"}
      />
    </div>
  );
}
