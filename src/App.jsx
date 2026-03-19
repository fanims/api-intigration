import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AllRoutes from './routes/Routes'
function App() {
  
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 ml-64">
        <Navbar/>
        <AllRoutes/>
      </div>
    </div>
  )
}

export default App
