import axios from "axios"
import * as constants from "../constants/Constants"
import { useEffect, useState } from "react"

const Companies = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const result= await axios.get(`${constants?.Companies_URL}/companies`)
        setData(result?.data)
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">All Companies</h2>
      {data.length === 0 ? (
        <div class="flex-col gap-4 w-full flex items-center justify-center">
          <div
            class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
          >
            <div
              class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
          </div>
        </div>
      ) :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((compny, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
                {/* <img src={compny?.logo} alt={compny?.name} /> */}
                <div className="flex items-center justify-between mt-6">
                <strong className="text-gray-600 mt-1">Name: </strong><span>{compny?.name}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Industry: </strong><span>{compny?.industry}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Ceo Name: </strong><span>{compny?.ceoName}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Country: </strong><span>{compny?.country}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Zip: </strong><span>{compny?.zip}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Address: </strong><span>{compny?.address}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Market Cap: </strong><span>{compny?.marketCap}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Employee Count: </strong><span>{compny?.employeeCount}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Domain: </strong><span>{compny?.domain}</span>
                </div>
            </div>
            ))}
        </div>

      }
    </div>
  )
}

export default Companies