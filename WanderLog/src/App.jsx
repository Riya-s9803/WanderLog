import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";


function App(){
  
  return (<div>
   
         <BrowserRouter>
           <Routes>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="app" element={<AppLayout/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
         </BrowserRouter>

         </div>
         );
}
export default App;