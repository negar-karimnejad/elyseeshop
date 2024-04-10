import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import Advice from './pages/Advice';
import AppLayout from './pages/AppLayout';
import Blog from './pages/Blog';
import Brands from './pages/Brands';
import CommonQuestions from './pages/CommonQuestions';
import Complaints from './pages/Complaints';
import Contact from './pages/Contact';
import CreateProduct from './pages/CreateProduct';
import CustomerClub from './pages/CustomerClub';
import Dashboard from './pages/Dashboard';
import Guide from './pages/Guide';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import MyAdvice from './pages/MyAdvice';
import NotFound from './pages/NotFound';
import Orders from './pages/Orders';
import Privacy from './pages/Privacy';
import Product from './pages/Product';
import Products from './pages/Products';
import Register from './pages/Register';
import SingleBlog from './pages/SingleBlog';
import Terms from './pages/Terms';
import Cart from './pages/cart/Cart';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/باشگاه-مشتریان" element={<CustomerClub />} />
            <Route path="/درباره-ما" element={<About />} />
            <Route path="/قوانین-و-مقررات" element={<Terms />} />
            <Route path="/حریم-خصوصی" element={<Privacy />} />
            <Route path="/راهنمای-سفارش-و-خرید" element={<Guide />} />
            <Route path="/سوالات-متداول" element={<CommonQuestions />} />
            <Route path="/ثبت-شکایات-و-انتقادات" element={<Complaints />} />
            <Route path="/تماس-با-ما" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id/*" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/myAdvice" element={<MyAdvice />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
