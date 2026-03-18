import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


const Checkout = () => {

    useLocation ()
    const [selectProduct, setSelectProduct] = useState({})
    
    const getData = () => {
        setSelectProduct(JSON.parse(localStorage.getItem("product")))
    }

    useEffect(() => {
        getData ()
    }, [])
    
return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{selectProduct?.title}</h2>
            <p className="text-gray-700">{selectProduct?.description}</p>
            <div className="flex items-center justify-between mt-1">
                <div className="block">
                    <strong>Category: </strong><span>{selectProduct?.category}</span>
                </div>
                <div className="block">
                    <strong>Price: </strong><span>{selectProduct?.price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout