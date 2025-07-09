import './App.css'
import AddSystemDetails from './components/Add-system-details'
import Mobiles from './components/Mobiles'
import MyStore from './components/MyStore'
import Navbar from './components/Navbar'
import AllRoutes from './routes/Routes'
function App() {
  
  return (
    <>
      <Navbar/>
      <AllRoutes/>
      {/* <div className='p-6 mt-5 flex items-start flex-wrap'>
        <Mobiles/>
        <AddSystemDetails/>
        <MyStore/>
      </div> */}
    </>
  )
}

export default App
