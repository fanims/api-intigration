import './App.css'
import AddSystemDetails from './components/Add-system-details'
import Mobiles from './components/Mobiles'
import MyStore from './components/MyStore'
function App() {
  
  return (
    <>
      <div className='p-6 mt-5 flex items-start flex-wrap'>
        <Mobiles/>
        <AddSystemDetails/>
        <MyStore/>
      </div>
    </>
  )
}

export default App
