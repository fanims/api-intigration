import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navbar = [
        {name : "Home", link : "/"},
        {name : "About", link : "/about"},
        {name : "Shop", link : "/shop"},
        {name : "Checkout", link : "/checkout"}
    ]
  return (
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
                MyStore
            </div>
            <nav>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    {navbar.map((item, index) => (
                        <li key={index}>
                            <Link to={item?.link} className="hover:text-blue-600 transition">{item?.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>

  )
}

export default Navbar