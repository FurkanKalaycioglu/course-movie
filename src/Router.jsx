import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import App from "./pages/App";

function Router() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLogged(true);
    }
  }, []);

  useEffect(() => {
    console.log("isLogged", isLogged);
  }, [isLogged]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {!isLogged ? (
            <div>test1</div>
          ) : (
            <Navigate to="/login" replace={true} />
          )}
        </>
      ),
    },
    {
      path: "/login",
      element: <div>test login</div>,
    },
    {
      path: "/payment",
      element: <div>test payment</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;