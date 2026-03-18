import axios from "axios"
import * as constants from "../constants/Constants"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



const MyStore = () => {

    const navigate = useNavigate ()
    const [data, setData] = useState([])
    const [id, setId] = useState("")

    const getData = async () => {
        const result = await axios.get(`${constants?.MyStore_URL}/products`)
        setData (result?.data?.products)
        console.log(result?.data?.products)
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
        if(id) {
            selectedProduct()
        }
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
                        <h3 className="mt-2 text-lg font-semibold text-gray-800">{product?.title}</h3>
                        <p className="text-gray-800 font-bold mt-1">{product?.description}</p>
                        <div className="flex items-center justify-between mt-1">
                            <div className="block">
                                <strong>Category: </strong><span>{product?.category}</span>
                            </div>
                            <div className="block">
                                <strong>Price: </strong><span>{product?.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default MyStore