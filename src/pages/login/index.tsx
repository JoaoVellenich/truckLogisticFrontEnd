import { ArrowRight, KeyRound, User, UserRoundPlus } from "lucide-react";
import { Button } from "../../components/button/button";
import { Logo } from "../../components/logo/logo";
import { Input } from "../../components/input/input";

export function Login() {
  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center content-center">
      <Logo />
      <div className="max-w-3xl w-full flex flex-col justify-center items-center space-y-2.5">
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <User className="text-zinc-700 size-5" />
          <Input placeholder="Digite seu email"></Input>
        </div>
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <KeyRound className="text-zinc-700 size-5" />
          <Input placeholder="Digite a sua senha" />
        </div>
      </div>
      <div className="max-w-80 w-full flex justify-center gap-2">
        <Button>
          <UserRoundPlus className="size-5" />
          Cadastrar
        </Button>
        <Button>
          Login
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
