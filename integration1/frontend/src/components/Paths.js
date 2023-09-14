import { BrowserRouter,Routes,Route } from "react-router-dom";
import AxiosGet from "./AxiosGet";
import Add from "./Add";
import UpdatedData from "./UpdatedData";
import DeleteData from "./DeleteData";
import Task2 from "./Task2";
import Task2add from "./Task2add";
import Task2edit from "./Task2edit";
import View from "./View";
import Barchart from "./Barchart"
import DouChart from "./DouChart";
import Piechart from "./Piechart";

function Paths(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AxiosGet/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/update/:id" element={<UpdatedData/>}/>
            <Route path="/delete/:id" element={<DeleteData/>}/>
            <Route path="/task2" element={<Task2/>}/>
            <Route path="/dataadd" element={<Task2add/>}/>
            <Route path="/updatedata/:id" element={<Task2edit/>}/>
            <Route path="/view/:id" element={<View/>}/>
            <Route path="/bar" element={<Barchart/>}/>
            <Route path="/dough" element={<DouChart/>}/>
            <Route path="/pie" element={<Piechart/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Paths;