import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function AddPost() {
    const history=useHistory();
const [title,setTitle]=useState('');
const [body,setBody]=useState('');
const adddPostHandler=async(e)=>{
    e.preventDefault();
  const result=await axios.post(`/add`,{title,body});
  if(result){
    toast.success('your data save successfully',{position:toast.POSITION.TOP_CENTER,autoClose:5000});
      // alert('your data save successfully');
      history.push("/");
  }else{
      alert('data not save');
  }  

}

    return (
        <div className="container py-3">
        <div className="row">
            <h3 className="text-center text-danger pb-4 fw-bold fst-italic"> Create your Post :-</h3>
            <div className="col-12 col-md-8 mx-auto shadow p-4  mb-5 bg-body" style={{borderRadius:"1rem"}}>
            <form onSubmit={adddPostHandler}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="details" className="form-label">Details</label>
    <textarea className="form-control" id="details" rows="5" value={body} onChange={(e)=>setBody(e.target.value)}/>
  </div>
  <div className="d-grid gap-2 mt-3">
  <button className="btn btn-primary" type="submit">Create new post</button>
</div>
</form>
            </div>
        </div>

            
        </div>
    

    )
}

export default AddPost
