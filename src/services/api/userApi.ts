import { backendApi } from "./config";

interface RegisterUserInterface {
  name: string;
  email: string;
  password: string;
  role: "ADMIN";
  companyName: string;
}

export async function registerUser(
  params: RegisterUserInterface
): Promise<string> {
  try {
    console.log(params);
    const response = await backendApi.post("/user/register", params);
    console.log(response);
    return "";
  } catch (error: any) {
    const errMsg = error.response.data
      ? "Email já cadastrado"
      : "Erro interno, tente novamente mais tarde";
    return errMsg;
  }
}
