// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import MyState from './context/data/myState';
import Order from './pages/Order/Order';
import NoPage from './pages/nopage/NoPage';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import ProductInfo from './pages/productInfo/ProductInfo';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './pages/admin/pages/AddProduct';
import ParentComponent from './pages/admin/pages/ParentComponent';
import AllProducts from './pages/allproducts/AllProducts';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct/:productId" element={
  <ProtectedRoutesForAdmin>
    <ParentComponent />
  </ProtectedRoutesForAdmin>
} />

          <Route path="/*" element={<NoPage />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  if (admin && admin.user.email === 'vidyaviju2004@gmail.com') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};
