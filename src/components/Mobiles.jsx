import axios from "axios";
import { useEffect, useState } from "react";
import * as constants from "../constants/Constants"


const Mobiles = () => {

    const [data, setData] = useState([])
    const [id, setId] = useState("")
    const [filteredData, setFilteredData] = useState({})


    const getData = async() => {
        const result = await axios.get(constants.Base_URL+"/objects")
        setData(result?.data)
    }

    useEffect (() => {
        getData()
    }, [])

    useEffect (() => {
        if(id)
        {
            searchPhone()
        }
    }, [id])
    
    const searchPhone = async() => {
        const response = await axios.get(`${constants.Base_URL}/objects/${id}`)
        setFilteredData(response?.data)
    }
  return (
    <div className="w-[100%] flex items-start">
        <div className='p-4 block w-[30%]'>
            <h1 className='text-[36px] font-semibold text-center'>Mobile Zone</h1>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left border-b border-gray-300">ID</th>
                            <th className="px-4 py-2 text-left border-b border-gray-300">Mobile Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((mobiles, index) => (
                        <tr className="hover:bg-gray-50 cursor-pointer" key={index} onClick={() => setId(mobiles?.id)}>
                            <td className="px-4 py-2 border-b border-gray-200">{mobiles?.id}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{mobiles?.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
        <div className="p-4 block w-[70%]">
            <div className="dev-w-1/3 dev-bg-gray-100 dev-rounded dev-p-4 dev-shadow">
                <h2 className='text-[36px] font-semibold text-center'>Mobile Details</h2>
                <div className="flex items-center gap-2 my-4">
                    <input
                        type="text"
                        placeholder="Search by ID"
                        onChange={(e) => setId(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-full outline-0"
                    />
                    {/* <button onClick={() => searchPhone ()} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1 cursor-pointer">
                        <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                        Search
                    </button> */}
                </div>
                <div className="dev-space-y-2">
                    {filteredData ? (
                        <div>
                            <p className="py-1.5"><strong className="inline-block w-[200px]">Name:</strong>{filteredData?.name}</p>
                            <p className="py-1.5"><strong className="inline-block w-[200px]">Color:</strong>{filteredData?.data?.color || "None"}</p>
                            <p className="py-1.5"><strong className="inline-block w-[200px]">Capacity:</strong>{filteredData?.data?.capacity || "None"}</p>
                            <p className="py-1.5"><strong className="inline-block w-[200px]">Price:</strong>{filteredData?.data?.price || "None"}</p>
                        </div>
                    ) : (
                        <p className="text-gray-500">Search a mobile by ID to view details.</p>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobiles