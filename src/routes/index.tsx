import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Offers from 'pages/Offers';
import CheckOut from 'pages/CheckOut';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ofertas" element={<Offers />} />
        <Route path="checkout/:name" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
