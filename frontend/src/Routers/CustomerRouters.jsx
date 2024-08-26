import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Cart from "../Customer/components/Cart/Cart";
import Navigation from "../Customer/components/Navigation/Navigation";
import Footer from "../Customer/components/Footer/Footer";
import Product from "../Customer/components/Product/Product";
import OrderDetails from "../Customer/components/Order/OrderDetails";
import ProductDetails from "../Customer/components/ProductDetails/ProductDetails";
import Checkout from "../Customer/components/Checkout/Checkout";
import Order from "../Customer/components/Order/Order";
import Auth from "../login/auth";
import AdminPannel from "../Admin/AdminPannel";
import Customers from "../Admin/componets/customers/customers";
import OrdersTable from "../Admin/componets/Orders/OrdersTable";
import ProductsTable from "../Admin/componets/Products/ProductsTable";
import Dashboard from "../Admin/Views/Admin";
import WeeklyOverview from "../Admin/tables/WeeklyOverview";
import MonthlyOverview from "../Admin/tables/MonthlyOverView";
import CreateProductForm from "../Admin/componets/createProduct/CreateProductFrom";
import TotalEarning from "../Admin/tables/TotalEarning";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/adminpanel" element={<AdminPannel />}></Route>
        <Route path="account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductsTable />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/orders" element={<OrdersTable />} />
        <Route path="/admin/earnings" element={<TotalEarning />} />
        <Route path="/admin/weekly-overview" element={<WeeklyOverview />} />
        <Route path="/admin/monthly-overview" element={<MonthlyOverview />} />
        <Route path="/admin/product/create" element={<CreateProductForm />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
