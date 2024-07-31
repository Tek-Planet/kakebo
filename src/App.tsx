import Root from "./Root";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AboutUsPage,
  AllServicesPage,
  ContactPage,
  CreditUnionPage,
  Home,
  SavingsPage,
  ServicesPage,
} from "./pages";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      {/* app user routes */}
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<AllServicesPage />}></Route>
        <Route path="/services/:id" element={<SavingsPage />} />
        <Route path="/unions/:id" element={<ServicesPage />} />
        <Route path="/unions" element={<CreditUnionPage />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Route>
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
