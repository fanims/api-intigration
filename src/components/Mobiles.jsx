import axios from "axios";
import { useEffect, useState } from "react";


const Mobiles = () => {

    const [data, setData] = useState([])
    const [id, setId] = useState("")
    const [filteredData, setFilteredData] = useState({})
    const API_URL = "https://api.restful-api.dev/objects";
    const getData = async() => {
        const result = await axios.get(API_URL)
        setData(result?.data)
    }
    useEffect (() => {
        getData(API_URL)
    }, [])
    const searchPhone = () => {
        const result = data.filter(mobile => mobile.id === id)
        setFilteredData(result)
    }
    console.log(data)
  return (
    <div className="w-[100%] flex items-start">
        <div className='p-4 block w-[30%]'>
            <h1 className='text-[36px] font-semibold text-center'>Mobile Zone</h1>
            <ul className='[&_li+li]:mt-3 [&_li_strong]:w-1/2 [&_li_strong]:text-left'>
                <li className='flex items-center justify-around'>
                    <strong>No</strong>
                    <strong>Mobiles</strong>
                </li>
                {data.map((mobiles, index) => {
                    return(
                        <li className="flex items-center justify-around [&_span]:w-1/2 [&_span]:text-left" key={index}>
                            <span>{mobiles?.id}</span>
                            <span>{mobiles?.name}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="p-4 block w-[70%]">
            <h1 className='text-[36px] font-semibold text-center'>Mobile Details</h1>
            <div className="w-full flex items-center gap-2 mt-1.5">
                <input 
                    type="text" 
                    placeholder="Enter Value" 
                    onChange={e => setId(e.target.value)}
                    className="min-h-[36px] w-full border border-b-cyan-950 rounded-[4px] p-[4px_8px] outline-0" />
                <button type="button" onClick={() => searchPhone ()} className="p-[4px_12px] border border-b-cyan-950 rounded-[4px] cursor-pointer">Search</button>
            </div>
           
                    <ul className="mt-3 p-4 [&_li+li]:mt-3" >
                        <li className="flex items-center">
                            <strong className="block w-[200px]">Mobile Name</strong>
                            <span className="block w-[400px]">{filteredData?.name}</span>
                        </li>
                        <li className="flex items-center">
                            <strong className="block w-[200px]">Mobile Color</strong>
                            <span className="block w-[400px]">{filteredData?.data?.color || "None"}</span>
                        </li>
                        <li className="flex items-center">
                            <strong className="block w-[200px]">Mobile Capecity</strong>
                            <span className="block w-[400px]">{filteredData?.data?.capacity || "None"}</span>
                        </li>
                        <li className="flex items-center">
                            <strong className="block w-[200px]">Mobile Price</strong>
                            <span className="block w-[400px]">{filteredData?.data?.price || "None"}</span>
                        </li>
                    </ul>
        </div>
    </div>
  )
}

export default Mobiles