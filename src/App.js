import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { CounterProvider } from './Context/CounterContext';
import FAQ from './components/FAQ/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermOfServices from './components/TermOfServices/TermOfServices';
import Address from './components/address/address';
import Wishlist from './components/WishList/WishList';
import { WishlistProvider } from './Context/WishListContext';
import Productcom from './components/Product/Productcom';
import ForgetPassword from './components/Login/ForgotPassword';
import VerifyResetCode from './components/Login/VerifyResetCode';
import ResetPassword from './components/Login/ResetPassword';
import CashOnDelivery from './components/Cart/Cashondelivery';
import ContactUs from './components/ContactUs/ContactUs';
import FeaturedProducts from './components/Product/FeaturedProducts';
import AboutUs from './components/AboutUs/AboutUs';
import CheckOut from './components/CheckOut/CheckOut';
import New from './components/New/New';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },  // Default starting page
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'ForgetPassword', element: <ForgetPassword /> },
      { path: 'VerifyResetCode', element: <VerifyResetCode /> },
      { path: 'ResetPassword', element: <ResetPassword /> },
      { path: 'FAQ', element: <FAQ /> },
      { path: 'ContactUS', element: <ContactUs /> },
      { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
      { path: 'TermOfService', element: <TermOfServices /> },
      { path: 'WishList', element: <Wishlist /> },

      { path: 'FeaturedProducts', element: <ProtectedRoute><FeaturedProducts /></ProtectedRoute> },
      { path: 'AboutUs', element: <ProtectedRoute><AboutUs /></ProtectedRoute> },

      { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: 'Productcom', element: <ProtectedRoute><Productcom /></ProtectedRoute> },
      { path: 'ProductDetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'CheckOut', element: <ProtectedRoute><CheckOut /></ProtectedRoute> },

      { path: 'CashOnDelivery', element: <ProtectedRoute><CashOnDelivery /></ProtectedRoute> },
      { path: 'New', element: <ProtectedRoute><New /></ProtectedRoute> },
      { path: 'address', element: <ProtectedRoute><Address /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: '*', element: <Notfound /> },
    ],
  },
],
{
  basename: '/ShopSphere', 
}
);

function App() {
  return (
    <WishlistProvider>
      <UserContextProvider>
        <CartContextProvider>
          <CounterProvider>
            <RouterProvider router={routers} />
            <Toaster />
          </CounterProvider>
        </CartContextProvider>
      </UserContextProvider>
    </WishlistProvider>
  );
}

export default App;
