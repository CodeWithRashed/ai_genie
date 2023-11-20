import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Router.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import DataContext from "./ContextApi/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </DataContext>
  </React.StrictMode>
);
