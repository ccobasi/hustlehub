import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RouterProvider } from "react-router-dom";
import "./App.css";

import route from "./Routes";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
