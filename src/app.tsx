import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authProvider";
import Routes from "./routes/routes";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
