import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/pricing";
import Product from "./pages/product";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import "./index.css";
import AppLayout from "./pages/AppLayout";


function App(){
  
  return (<div>
   
         <BrowserRouter>
           <Routes>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="app" element={<AppLayout/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
         </BrowserRouter>

         </div>
         );
}
export default App;