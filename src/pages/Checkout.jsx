import axios from "axios"
import * as constants from "../constants/Constants"
import { useEffect, useState } from "react"



const MyStore = () => {

    const [data, setData] = useState([])
    const [id, setId] = useState("")
    const [selectProduct, setSelectProduct] = useState({})

    const getData = async () => {
        const result = await axios.get(constants.MyStore_URL+"/products")
        setData (result?.data)
    }
    const selectedProduct = async () => {
        const response = await axios.get(`${constants?.MyStore_URL}/products/${id}`)
        setSelectProduct(response?.data)
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    useEffect(() => {
        selectedProduct()
    }, [id])
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 mt-10">
        {selectProduct ? 
            <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <img src={selectProduct?.image} alt="Product Detail" className="w-full h-[400px] object-contain rounded" />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">{selectProduct?.name}</h2>
                    <p className="text-xl text-blue-600 font-semibold">{selectProduct?.price}</p>
                    <p className="text-gray-700">{selectProduct?.description}</p>
                    <p className="font-semibold text-gray-800">{selectProduct?.category}</p>
                    <div className="flex items-center justify-between mt-1">
                        <strong>Rateing: {selectProduct?.rating?.rate}</strong>
                        <span>Count: {selectProduct?.rating?.count}</span>
                    </div>
                </div>
            </div>
        :
            <p>No more product</p>
        }
    </div>

  )
}

export default MyStore