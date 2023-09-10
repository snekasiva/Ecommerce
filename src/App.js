import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Mobile from './Components/Mobile';
import Shoes from './Components/Shoes';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './Components/Cart';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <div >
     <Topbar/>
     <div id="layoutSidenav">
     <Sidebar/>
     <div id="layoutSidenav_content">
      <main>
        <Routes>
          <Route path='/Mobile' element={<Mobile/>}/>
          <Route path='/Shoes' element={<Shoes/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          
        </Routes>  
      </main>
      </div>
     </div>
    </div>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
