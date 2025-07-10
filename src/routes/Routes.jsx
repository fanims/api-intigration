import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Checkout from "../pages/Checkout"
import MyStore from "../pages/MyStore"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mystore" element={<MyStore/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
    </Routes>
  )
}

export default AllRoutes