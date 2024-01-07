import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Movies from "./pages/Movies";

function Router() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLogged(true);
    }
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "false");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {!isLogged ? (
            <div className="bg-white dark:bg-gray-400 w-screen h-screen">
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          ) : (
            <Navigate to="/login" replace={true} />
          )}
        </>
      ),
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/payment",
      element: <div>test payment</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
