import React,{useEffect} from "react"
import { calculateProducts } from "./components/features/cart/CartSlice";
import Layout from "./components/Layout/Layout";
// import {Products} from "./components/features/cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import RegisterLayout from "./components/Layout/RegisterLayout";

function App() {
  const {products} = useSelector(state => state.cart)
  const dispatch = useDispatch();

  useEffect( ()=>{
   dispatch(calculateProducts())
  },[products])

  return (
    <div className="App">
      <Layout />
      <RegisterLayout />
    </div>
  );
}

export default App;
