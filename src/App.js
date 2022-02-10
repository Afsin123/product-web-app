import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import AddProducts from './pages/AddEdit';
import ViewProduct from './pages/ViewProduct';
import UpdateProduct from './pages/UpdateProduct';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header/> 
        < ToastContainer position="top-center"/>
        <Routes> 
          <Route path="/" element={<Home/> } />
          <Route path="/add" element={<AddProducts/>} />
          <Route path="/update/:id" element={<AddProducts/>} />
          <Route path="/view" element={<View />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path="/about" element={<About/> } /> 
        </Routes>
       
      </div>
      </BrowserRouter>
  );
}

export default App;
