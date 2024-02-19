import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { AuthContextProvider } from "./context/AuthContext.tsx";
// import { QueryClientProvider } from "react-query";
// import queryClient from "./queryClient";
import { RouterProvider } from "react-router-dom";

import router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      <AuthContextProvider> */}
    <RouterProvider router={router} />
    {/* </AuthContextProvider>
    </QueryClientProvider> */}
  </React.StrictMode>
);
