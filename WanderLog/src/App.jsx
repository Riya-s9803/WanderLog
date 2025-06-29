import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";


function App(){
  
  return (<div>
   
         <BrowserRouter>
           <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="product" element={<Product/>}/>
            
            <Route path="app" element={<AppLayout/>}>
               <Route index element={<CityList/>}/>
               <Route path="cities" element={<CityList/>}/>
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