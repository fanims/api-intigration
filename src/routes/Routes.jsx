import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Checkout from "../pages/Checkout"
import MyStore from "../pages/MyStore"
import MyPets from "../pages/MyPets"
import Mobiles from "../pages/Mobiles"
import Companies from "../pages/Companies"
import Products from "../pages/Products"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mystore" element={<MyStore/>}></Route>
        <Route path="/mypets" element={<MyPets/>}></Route>
        <Route path="/api/mobiles" element={<Mobiles/>}></Route>
        <Route path="/api/json-companies" element={<Companies/>}></Route>
        <Route path="/api/products" element={<Products/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
    </Routes>
  )
}

export default AllRoutes