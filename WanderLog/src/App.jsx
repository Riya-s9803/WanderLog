import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const BASE_URL="http://localhost:8000";

function App(){
  const [cities,setCities]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(function(){
    async function fetchCities(){
      try {
      setIsLoading(true);
      const res= await fetch(`${BASE_URL}/cities`);
      const data=await res.json();
      setCities(data);}

      catch{
      alert("there was an error loading data...");
       }
      
       finally{
        setIsLoading(false);
       }
     }
     fetchCities();
   
  },[]);
  
  return (<div>
   
         <BrowserRouter>
           <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="product" element={<Product/>}/>
            
            <Route path="app" element={<AppLayout/>}>
               <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
               <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
               <Route path="countries" element={<p>countries</p>}/>
               <Route path="form" element={<p>form</p>}/>

            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
         </BrowserRouter>

         </div>
         );
}
export default App;