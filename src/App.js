
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Navbar/home/Home';
import Products from './Components/Products/Products';
import AddtoCart from './Components/Addtocart/AddtoCart';
import {Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/action';
function App() {
const dispatch=useDispatch()
  async function fetchProductDetails(){
    const streamResponse=await fetch(`https://fakestoreapi.com/products`)
    const textResponse=await streamResponse.text();
    const jsonData=JSON.parse(textResponse)
    // console.log("data",jsonData)
    dispatch(setProducts(jsonData))
  }

  useEffect(() => {
   fetchProductDetails()
  }, [])
  
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/addtoCart' element={<AddtoCart/>}/>
    </Routes>
    </div>
  );
}

export default App;
