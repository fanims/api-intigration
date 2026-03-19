import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const sidebarOptions = [
    { name: 'My Pets', link: '/mypets' },
    { name: 'Mobiles', link: '/api/mobiles' },
    { name: 'JSON Companies', link: '/api/json-companies' },
    { name: 'My Products', link: '/api/products' },
    { name: 'Crypto Prices', link: '/api/crypto' }
  ]

  const isActive = (link) => location.pathname === link

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto pt-6 shadow-lg">
      <div className="px-6 pb-6 border-b border-gray-800">
        <Link to="/mystore" className="block text-2xl font-bold text-blue-400 tracking-tight">
          MyStore
        </Link>
        <div className="text-xs text-gray-400 mt-1">API playground</div>
      </div>
      <nav className="p-6 space-y-2">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">API Testing</h3>
        {sidebarOptions.map((option, index) => (
          <Link
            key={index}
            to={option.link}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
              isActive(option.link)
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span className="font-medium">{option.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
