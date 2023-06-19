import { createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../../pages/home/home";
import Contact from "../../pages/contact/contact";
import ServiceLayout from "../layout/servicelayout";
import Services, { ServiceLoader } from "../../pages/services/services";
import ServiceDetails from "../servicedetails/servicedetails";
import About from "../../pages/about/about";
import NotFound from "../../pages/notfound/notfound";
import RootLayout from "../layout/rootlayout";
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<ServiceLayout />}>
          <Route index element={<Services />} loader={ServiceLoader} />
          <Route
            path=":id"
            element={<ServiceDetails />}
            loader={ServiceLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );