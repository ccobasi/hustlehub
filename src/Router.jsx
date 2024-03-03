import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Error from "./Error";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Programes from "./pages/Progames";
import NotFound from "./pages/NotFound";

import { RootLayout } from "./layouts/RootLayout";
import { OtherPages } from "./layouts/OtherPages";
import EditProfile from "./pages/EditProfile";
import ClientDashboard from "./pages/ClientDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/progames" element={<Programes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/clientdashboard" element={<ClientDashboard />} />
      </Route>
      <Route path="" element={<OtherPages />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
