
import SideBar from './components/Common/SideBar'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Directory from './pages/Directory'
import Dashboard from './pages/Dashboard'
import Leave from './pages/Leave'
import DocTracker from './pages/DocTracker'
import Notifications from "./pages/Notifications"
const App = () => {
  return (
    <div className='grid grid-cols-5'>
      <BrowserRouter>
        <SideBar className="col-span-1"></SideBar>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route path='/employee' element={<Directory/>}></Route>
          <Route path='/leave' element={<Leave/>}></Route>
          <Route path='/documents' element={<DocTracker/>}></Route>
          <Route path='/notifications' element={<Notifications/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App