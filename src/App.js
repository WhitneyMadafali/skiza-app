import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";
import Subscription from './component/Subscription';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/Subscription" element={<Subscription/>}/>
      </Routes>
    </>
    
  );
}

export default App;