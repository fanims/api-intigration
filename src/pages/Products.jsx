import axios from "axios"
import * as constants from "../constants/Constants"
import { useEffect, useState } from "react"


const Products = () => {

    const [products, setProducts] = useState ([])

    const getProducts = async () => {
        const result = await axios.get(`${constants?.Products_URL}/api/products`)
        setProducts (result?.data)
    }
    console.log(products)

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                    <img src={product?.image} alt={product?.name} />
                    <div className="flex items-center justify-between mt-6">
                        <strong className="text-gray-600 mt-1">Name: </strong><span>{product?.name}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-1">
                        <strong className="text-gray-600 mt-1">Brand: </strong><span>{product?.brand}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-1">
                        <strong className="text-gray-600 mt-1">Category: </strong><span>{product?.category}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-1">
                        <strong className="text-gray-600 mt-1">Price: </strong><span>{product?.price}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-1">
                        <strong className="text-gray-600 mt-1">Discount: </strong><span>{product?.discount}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-1">
                        <strong className="text-gray-600 mt-1">Rating: </strong><span>{product?.rating}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-1">
                        <strong className="text-gray-600 mt-1">Description: </strong><span>{product?.description}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-1">
                        <strong className="text-gray-600 mt-1">Availability: </strong><span>{product?.availability === true ? "In Stock" : "Out of Stock"}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products