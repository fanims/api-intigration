import axios from "axios"
import { useState } from "react"
import * as constants from "../constants/Constants"

const AddSystemDetails = () => {

    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [pricePhone, setPricePhone] = useState("")
    const [model, setModel] = useState("")
    const [diskSize, setDiskSize] = useState("")
    const [error, setError] = useState(false)
    const [data, setData] = useState({})

    const submitData = async (e) => {
        e.preventDefault()
        const addData = {
            name,
            data: {
                "year": year,
                "price": pricePhone,
                "CPU_model": model,
                "hard_disk_size": diskSize
            }
        }
        const result = await axios.post(constants.Base_URL + "/objects", addData)
        if (result?.status === 200) {
            setData(result?.data)

        } else { setError(true) }
    }



    return (
        <div className="w-[100%] flex items-start mt-10">
            <div className='p-4 block w-[30%]'>
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Product</h2>
                    <form onSubmit={submitData} className="space-y-4" >
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Year</label>
                            <input type="number" name="year" value={year} onChange={(e) => setYear(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Price</label>
                            <input type="number" name="price" value={pricePhone} onChange={(e) => setPricePhone(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">CPU Model</label>
                            <input type="text" name="cpuModel" value={model} onChange={(e) => setModel(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Hard Disk Size</label>
                            <input type="text" name="hardDisk" value={diskSize} onChange={(e) => setDiskSize(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded outline-0" />
                        </div>
                        <div className="text-center pt-4">
                            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
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
                        {!error ?
                            <div>
                                <p className="py-1.5"><strong className="inline-block w-[200px]">Name:</strong>{data?.name}</p>
                                <p className="py-1.5"><strong className="inline-block w-[200px]">Year:</strong>{data?.data?.year}</p>
                                <p className="py-1.5"><strong className="inline-block w-[200px]">Price:</strong>{data?.data?.price}</p>
                                <p className="py-1.5"><strong className="inline-block w-[200px]">CPU Model:</strong>{data?.data?.CPU_model}</p>
                                <p className="py-1.5"><strong className="inline-block w-[200px]">Hard Disk Size:</strong>{data?.data?.hard_disk_size}</p>
                            </div> :
                            <p>Not data found</p>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddSystemDetails