import axios from "axios"
import { useState } from "react"
import * as constants from "../constants/Constants"

const AddSystemDetails = () => {

    const [name, setName] = useState ("")
    const [year, setYear] = useState ("") 
    const [price, setPrice] = useState ("")
    const [model, setModel] = useState ("")
    const [diskSize, setDiskSize] = useState ("")

    const submitData = async () => {
        const addData = {
            name,
            data: {
                "year": year,
                "price": price,
                "cpuModel": model,
                "hardDisk": diskSize
            }
        }
        const result = await axios.post(constants.Base_URL+"/object", addData)
    }


  return (
    <div className="w-[100%] flex items-start mt-10">
        <div className='p-4 block w-[30%]'>
            <div className="bg-white p-5 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Product</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Year</label>
                        <input type="number" name="year" onChange={(e) => setYear(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Price</label>
                        <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">CPU Model</label>
                        <input type="text" name="cpuModel" onChange={(e) => setModel(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Hard Disk Size</label>
                        <input type="text" name="hardDisk" onChange={(e) => setDiskSize(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                    </div>
                    <div className="text-center pt-4">
                        <button type="submit" onClick={() => submitData ()} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="p-4 block w-[70%]">
            <div className="dev-w-1/3 dev-bg-gray-100 dev-rounded dev-p-4 dev-shadow">
                <h2 className='text-[36px] font-semibold text-center'>Details</h2>
                <div className="dev-space-y-2">
                    <div>
                        <p className="py-1.5"><strong className="inline-block w-[200px]">Name:</strong>{name}</p>
                        <p className="py-1.5"><strong className="inline-block w-[200px]">Year:</strong>{year}</p>
                        <p className="py-1.5"><strong className="inline-block w-[200px]">Price:</strong>{price}</p>
                        <p className="py-1.5"><strong className="inline-block w-[200px]">CPU Model:</strong>{model}</p>
                        <p className="py-1.5"><strong className="inline-block w-[200px]">Hard Disk Size:</strong>{diskSize}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default AddSystemDetails