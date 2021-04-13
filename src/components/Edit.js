import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { AppContext } from './context';

function Edit() {
const {id}=useParams();
const history=useHistory()
const [update,setUpdate]=useState({});
const [title,setTitle]=useState('');
const [body,setBody]=useState('');


const {loading,noLoading}=useContext(AppContext);
const fetchEditData=async()=>{
const result =await axios.get(`/posts/${id}`);
console.log(result.data);
setUpdate(result.data);
setTitle(result.data.title);
setBody(result.data.body);

}
useEffect(()=>{
fetchEditData();
noLoading();
},[noLoading]);
const submitHandler=async(e)=>{
e.preventDefault();
const savedata=await axios.put(`/update/${id}`,{title,body});
if(savedata){
    alert('your data updated successfully');
    history.push('/');
}
else{
    alert('data not updated');
}
}


if(loading){
    return(<h1 className="text-center fw-bold">loading...</h1>)
}
    return (
        <div className="container py-3">
        <div className="row">
            <h3 className="text-center text-danger pb-4 fw-bold fst-italic"> Edit page</h3>
            <div className="col-12 col-md-8 mx-auto shadow p-4  mb-5 bg-body" style={{borderRadius:"1rem"}}>
            <form onSubmit={submitHandler}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="details" className="form-label">Details</label>
    <textarea className="form-control" id="details" rows="5" value={body} onChange={(e)=>setBody(e.target.value)}/>
  </div>
  <div className="d-grid gap-2 mt-3">
  <button className="btn btn-primary" type="submit">Edit</button>
</div>
</form>
            </div>
        </div>

            
        </div>
    )
}

export default Edit
