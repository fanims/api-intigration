import axios from "axios"
import * as constants from "../constants/Constants"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



const MyStore = () => {

    const navigate = useNavigate ()
    const [data, setData] = useState([])
    const [id, setId] = useState("")

    const getData = async () => {
        const result = await axios.get(constants.MyStore_URL+"/products")
        setData (result?.data)
    }
    const selectedProduct = async () => {
        const response = await axios.get(`${constants?.MyStore_URL}/products/${id}`)
        if(id) {
            localStorage.setItem("product", JSON.stringify(response?.data))
            navigate("/checkout")
        }

    }
    

    useEffect(() => {
        getData()
    }, [])
    
    useEffect(() => {
        selectedProduct()
    }, [id])
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 mt-10">
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Product List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((product, index) => (
                    <div
                        key={index} 
                        onClick={() => setId (product?.id)}
                        className="bg-white rounded-lg shadow p-4 hover:shadow-md transition cursor-pointer" 
                    >
                        <img src={product?.image} alt="Product" className="w-full h-[400px] object-contain rounded" />
                        <h3 className="mt-2 text-lg font-semibold text-gray-800">{product?.title}</h3>
                        <p className="text-blue-600 font-bold mt-1">{product?.price}</p>
                        <div className="flex items-center justify-between mt-1">
                            <strong>Rateing: {product?.rating?.rate}</strong>
                            <span>Count: {product?.rating?.count}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default MyStore