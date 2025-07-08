import './App.css'
import AddSystemDetails from './components/Add-system-details'
import Mobiles from './components/Mobiles'
// import Population from './components/Population'
function App() {
  
  return (
    <>
      <div className='p-6 mt-5 flex items-start flex-wrap'>
        {/* <Population/> */}
        <Mobiles/>
        <AddSystemDetails/>
      </div>
    </>
  )
}

export default App
