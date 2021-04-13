import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginHandler=async(e)=>{
        e.preventDefault();
        const result=await axios.post("/auth/login",{
            email,password
        });
        if(result){
            alert('you are login successfully');
            history.push('/');
    window.location.reload();

        }else{
            alert('invalid user details');
        }
    } 
    return (
<div className="container py-3">
        <div className="row">
            <h3 className="text-center text-danger pb-4 fw-bold fst-italic"> Login form</h3>
            <div className="col-12 col-md-6 mx-auto shadow p-4  mb-5 bg-body" style={{borderRadius:"1rem"}}>
            <form onSubmit={loginHandler}>
  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input type="password" className="form-control" id="password"
     onChange={(e)=>setPassword(e.target.value)} required/>
  </div>
   
  <div className="d-grid gap-2 mt-4">
  <button className="btn btn-primary" type="submit">Login</button>
</div>
</form>
            </div>
        </div>

            
        </div>
    )
}

export default Login
