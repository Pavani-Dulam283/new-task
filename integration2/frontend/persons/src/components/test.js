import React,{useState,useEffect} from "react";
import axios from "axios";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import {Link, useNavigate} from "react-router-dom";

        

const Persons=()=>{
    const[data,setdata]=useState([])
    const[search,setsearch]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/pro/person/").then(res=>{
            setdata(res.data)
        }).catch(err=>console.log(err))
    },[])
    const [visible, setVisible] = useState(false);
    const[inputdata,setinput]=useState({serialNo:"",FirstName:"",LastName:"",Email:"",Course:""})

    function handlesubmit(e){
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/pro/person/",inputdata).then(res=>{
            alert("data added successfully")
            navigate("/")

    
        }).catch(err=>console.log(err))

    }
    function Deldata(item){
        
        
        axios.delete("http://127.0.0.1:8000/pro/person/"+item+"/").then(
            alert("Field deleted successfully")

        ).catch(error=>console.error(error))
        
    }



    return(
        <>

        <div className="card flex justify-content-center">
            <div className="text-end">
            <Button label="Add data" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>serialNo:</label>
                    <input type="text" className="form-control" onChange={e=>setinput({...inputdata,serialNo:e.target.value})}></input>
                </div>
                <div>
                    <label>FirstName:</label>
                    <input type="text" className="form-control" onChange={e=>setinput({...inputdata,FirstName:e.target.value})}></input>
                </div>
                <div>
                    <label>LastName:</label>
                    <input type="text" className="form-control" onChange={e=>setinput({...inputdata,LastName:e.target.value})}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" className="form-control" onChange={e=>setinput({...inputdata,Email:e.target.value})}></input>
                </div>
                <div>
                    <label>Course:</label>
                    <input type="text" className="form-control" onChange={e=>setinput({...inputdata,Course:e.target.value})}></input>
                </div>
                <br></br>
                <div>
                     <button className="btn btn-info">Add</button>
                </div>
                </form>

            </Dialog>
             </div>
       </div>
        
          <div className="app">
            <input type="text"
                placeholder="search...." className="form-control" onChange={(e)=>setsearch(e.target.value)}/>
            
          </div>
        
         <table class="table table-sm table-hover">
         <thead>
           <tr>
             <th scope="col">id</th>
             <th scope="col">Serial No</th>
             <th scope="col">FirstName</th>
             <th scope="col">LastName</th>
             <th scope="col">Email</th>
             <th scope="col">Course</th>
             <th scope="col">Remove</th>
             <th scope="col">Edit</th>
           </tr>
          </thead>
          <tbody>

            {data.filter((item)=>{
                return search.toLowerCase()===''
                ? item 
                :item.FirstName.toLowerCase().includes(search) ||
                item.LastName.toLowerCase().includes(search) ||
                item.Course.toLowerCase().includes(search);
            })

            .map((item,k)=>(
            <>
             <tr key={k}>
              <td>{item.id}</td>
              <td>{item.serialNo}</td>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Email}</td>
              <td>{item.Course}</td>
              <td onClick={()=>Deldata(item.id)}><span class="material-symbols-outlined" >delete</span></td>
              <td> <Link to={`/editdata/${item.id}`} ><span class="material-symbols-outlined">edit_square</span></Link></td>
             </tr>
            </>
             ))}
             </tbody>
             </table>

             
             </>
        
    )



}
export default Persons