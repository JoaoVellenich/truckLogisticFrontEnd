import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { SingIn } from "./pages/singin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/singIn",
    element: <SingIn />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
