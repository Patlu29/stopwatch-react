import { BrowserRouter,Routes,Route } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import StopWatch from "./pages/StopWatch";

function Myindex(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Layout />} />
                <Route path="Home" element ={<Home />} />
                <Route path="Aboutus" element={<Aboutus />} />
                <Route path="StopWatch" element={<StopWatch />}/>
                <Route path="Layout" element={<Layout />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Myindex;