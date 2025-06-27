import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/pricing";
import Product from "./pages/product";
import HomePage from "./pages/homepage";
import PageNotFound from "./pages/PageNotFound";


function App(){
  
  return (<div>
   
         <BrowserRouter>
           <Routes>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
         </BrowserRouter>

         </div>
         );
}
export default App;