import axios from "axios"
import * as constants from "../constants/Constants"
import { useEffect, useState } from "react"

const Mobiles = () => {

  const [data, setData] = useState([])

  const getData = async () => {
      const result = await axios.get(`${constants?.Mobiles_URL}/objects`)
      setData(result?.data)
  }

  useEffect(() => {
      getData ()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">All Mobiles</h2>
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
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <h3 className="mt-2 text-xl font-semibold text-gray-800">{item?.name}</h3>
              <div className="flex items-center justify-between mt-6">
                <strong className="text-gray-600 mt-1">Color: </strong><span>{item?.data?.color}</span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <strong className="text-gray-600 mt-1">Generation: </strong><span>{item?.data?.generation || item?.data?.Generation}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Capacity: </strong><span>{item?.data?.capacity || item?.data?.Capacity}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <strong className="text-gray-600 mt-1">Price: </strong><span>{item?.data?.price || item?.data?.Price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Mobiles
