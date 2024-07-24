import { backendApi } from "./config";

interface RegisterUserInterface {
  name: string;
  email: string;
  password: string;
  role: "ADMIN";
  companyName: string;
}

interface LoginUserInterface {
  email: string;
  password: string;
}

export async function registerUser(
  params: RegisterUserInterface
): Promise<string> {
  try {
    await backendApi.post("/user/register", params);
    return "";
  } catch (error: any) {
    const errMsg = error.response.data
      ? "Email já cadastrado"
      : "Erro interno, tente novamente mais tarde";
    return errMsg;
  }
}

export async function loginUser(params: LoginUserInterface): Promise<boolean> {
  try {
    const response = await backendApi.post("/user/login", params);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

export async function validateUser(): Promise<boolean> {
  try {
    const response = await backendApi.get("/user/check");
    return response.status === 200;
  } catch (error) {
    return false;
  }
}
