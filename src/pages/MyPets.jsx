import axios from "axios"
import { useEffect, useState } from "react"
import * as constants from "../constants/Constants"


const MyPets = () => {

  const [data, setData] = useState("")

  const getData = async () => {
    const result = await axios.get(`${constants?.MyPets_URL}/api/breeds/image/random`)
    setData(result?.data?.message)
  }

  useEffect(() => {
    getData ()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">My Pets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          {data ? 
            <img src={data} alt="pet" />
            :
            <div class="flex-col gap-4 w-full flex items-center justify-center">
              <div
                class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
              >
                <div
                  class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                ></div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default MyPets
