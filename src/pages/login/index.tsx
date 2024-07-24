import { ArrowRight, KeyRound, User, UserRoundPlus } from "lucide-react";
import { Button } from "../../components/button/button";
import { Logo } from "../../components/logo/logo";
import { Input } from "../../components/input/input";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/errorMessage/errorMessage";
import { loginUser } from "../../services/api/userApi";
import { AuthContext } from "../../context/authContext";

export function Login() {
  const navigate = useNavigate();

  const { setAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");

  async function handleLogin() {
    setErr("");
    if (!username || !password) {
      setErr("Preencha os campos");
      return;
    }

    const response = await loginUser({ email: username, password: password });
    if (!response) {
      setErr("Email ou senha incorretos");
      return;
    }
    console.log("Autenticado");
    setAuthenticated(true);
    navigate("/home");
  }

  function handleSingIn() {
    navigate("/singIn");
  }

  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center content-center">
      <Logo />
      <div className="max-w-3xl w-full flex flex-col justify-center items-center space-y-2.5">
        <ErrorMessage message={err} />
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <User className="text-zinc-700 size-5" />
          <Input
            placeholder="Digite seu email"
            type="email"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
        </div>
        <div className="text-lg bg-zinc-300 w-80 h-14 rounded-3xl flex justify-center items-center gap-2 p-5">
          <KeyRound className="text-zinc-700 size-5" />
          <Input
            placeholder="Digite a sua senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="max-w-80 w-full flex justify-center gap-2">
        <Button onClick={handleSingIn}>
          <UserRoundPlus className="size-5" />
          Cadastrar
        </Button>
        <Button onClick={handleLogin}>
          Login
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
