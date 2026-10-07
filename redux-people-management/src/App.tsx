import { RouterProvider } from "react-router-dom";
import { routes } from "./app/router/router.tsx";

export const App = () => {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};
