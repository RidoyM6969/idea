
import "slick-carousel/slick/slick.css";
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements, } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Layout from "./components/Layout";
import Shoppage from "./pages/Shoppage";
import ProducDtails from "./pages/ProducDtails";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import CheckOutPage from "./pages/CheckOutPage";
import ErrorPage from "./pages/ErrorPage";


function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/products" element={<Productpage />}></Route>
      <Route path="/shop" element={<Shoppage />}></Route>
      <Route path="/shop/:id" element={<ProducDtails />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/checkout" element={<CheckOutPage />}></Route>
      <Route path="/*" element={<ErrorPage/>}></Route>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
