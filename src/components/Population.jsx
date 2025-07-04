import axios from 'axios'
import { useEffect, useState } from 'react'

const Population = () => {
    const [data, setData] = useState([])
    const API = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

        const getData = async() => {
        const result = await axios.get(API)
        setData(result?.data?.data)
        }

        useEffect(() => {
        getData(API)
    }, [])
  return (
    <div className='block w-[30%]'>
        <h1 className='text-[36px] font-semibold text-center'>Populations</h1>
        <ul className='p-4 [&_li+li]:mt-3 [&_li_strong]:min-w-[160px] [&_li_strong]:text-center'>
          <li className='flex items-center justify-around'>
            <strong>Nation</strong>
            <strong>Year</strong>
            <strong>Population</strong>
          </li>
          {data.map((item, index) => {
            return (
              <li className='flex items-center justify-around [&_span]:min-w-[160px] [&_span]:text-center' key={index}>
                <span>{item.Nation}</span>
                <span>{item.Year}</span>
                <span>{item.Population}</span>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Population