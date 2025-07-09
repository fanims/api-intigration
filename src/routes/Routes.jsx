import { Routes, Route } from "react-router-dom"
import MyStore from "../components/MyStore"
import Home from "../pages/Home"
import Checkout from "../pages/Checkout"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<MyStore/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
    </Routes>
  )
}

export default AllRoutes