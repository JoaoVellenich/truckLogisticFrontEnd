import {
  ArrowLeft,
  Building2,
  Lock,
  Mail,
  User,
  UserRoundPlus,
} from "lucide-react";
import { Logo } from "../../components/logo/logo";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../services/api/userApi";
import { ErrorMessage } from "../../components/errorMessage/errorMessage";

export function SingIn() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [company, setCompany] = useState("");

  const [err, setErr] = useState("");

  function handleGoBack() {
    navigate("/");
  }

  async function handleCreateAccount() {
    setErr("");
    if (password !== rePassword) {
      setErr("Senhas diferentes");
      return;
    }

    if (!name) {
      setErr("Nome está vazio");
      return;
    }

    if (!email) {
      setErr("Email está vazio");
      return;
    }

    if (!password) {
      setErr("Senha está vazio");
      return;
    }

    if (!company) {
      setErr("Empresa está vazio");
      return;
    }

    const response = await registerUser({
      name,
      email,
      password,
      companyName: company,
      role: "ADMIN",
    });
    if (response == "") {
      navigate("/");
    } else {
      setErr(response);
      return;
    }
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen content-center">
      <Logo />
      <div className="max-w-3xl w-full flex flex-col justify-center items-center space-y-2.5">
        {err !== "" && <ErrorMessage message={err} />}
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <Building2 className="text-zinc-700 size-5" />
          <Input
            placeholder="Nome da empresa"
            type="text"
            onChange={(e) => setCompany(e.target.value)}
          ></Input>
        </div>
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <User className="text-zinc-700 size-5" />
          <Input
            placeholder="Digite seu nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </div>
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <Mail className="text-zinc-700 size-5" />
          <Input
            placeholder="Digite seu email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <Lock className="text-zinc-700 size-5" />
          <Input
            placeholder="Cadastre uma senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <Lock className="text-zinc-700 size-5" />
          <Input
            placeholder="Redigite a senha"
            type="password"
            onChange={(e) => setRePassword(e.target.value)}
          ></Input>
        </div>
      </div>
      <div className="max-w-80 w-full flex justify-center gap-2">
        <Button onClick={handleGoBack} variant="secondary">
          <ArrowLeft className="size-5" />
          Voltar
        </Button>
        <Button onClick={handleCreateAccount}>
          Criar conta
          <UserRoundPlus className="size-5" />
        </Button>
      </div>
    </div>
  );
}
