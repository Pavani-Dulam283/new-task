import React from "react";
import Persons from "./components/Persons";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Edit from "./components/Edit";
import Barchart from "./components/Barchart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Persons/>}/>
       <Route path="/editdata/:id" element={<Edit/>}/>
       <Route path="/bar" element={<Barchart/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
