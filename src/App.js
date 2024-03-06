
import './App.css';
import Navbar from './componenets/Navbar';
import {Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <div  className="bg-slate-950">
   <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
