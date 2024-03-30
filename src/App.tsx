import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Brands from "./pages/Brands";
import Blog from "./pages/Blog";
import Advice from "./pages/Advice";
import CustumerClub from "./pages/CustumerClub";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Guide from "./pages/Guide";
import CommonQuestions from "./pages/CommonQuestions";
import Complaints from "./pages/Complaints";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/باشگاه-مشتریان" element={<CustumerClub />} />
        <Route path="/درباره-ما" element={<About />} />
        <Route path="/قوانین-و-مقررات" element={<Terms />} />
        <Route path="/حریم-خصوصی" element={<Privacy />} />
        <Route path="/راهنمای-سفارش-و-خرید" element={<Guide />} />
        <Route path="/سوالات-متداول" element={<CommonQuestions />} />
        <Route path="/ثبت-شکایات-و-انتقادات" element={<Complaints />} />
        <Route path="/تماس-با-ما" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
