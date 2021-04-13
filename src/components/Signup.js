import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Signup() {
    const history=useHistory();
    const [name,setname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordVerify,setPasswordVerify]=useState('')
const [model,setmodel]=useState(false);
const closeModel=()=>{
    setmodel(false);
}

    const signupHandler=async(e)=>{
        e.preventDefault();
        if(password!==passwordVerify){
           return setmodel(true)
        }
        const result=await axios.post("/auth/",{
            name,email,password,passwordVerify
        });
        if(result){
            alert('your account created successfully');
            history.push('/');
    window.location.reload();
            
        }else{
            alert('invalid user details');
        }
    } 
    return (
<div className="container py-3">
        <div className="row">
            <h3 className="text-center text-danger pb-4 fw-bold fst-italic"> Signup form</h3>
            <div className="col-12 col-md-8 mx-auto shadow p-4  mb-5 bg-body" style={{borderRadius:"1rem"}}>
            <form onSubmit={signupHandler}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={(e)=>setname(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input type="password" className="form-control" id="password"
     onChange={(e)=>setPassword(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirmpassword" className="form-label">Confirm password</label>
    <input type="password" className="form-control" id="confirmpassword"
        onChange={(e)=>setPasswordVerify(e.target.value)}
        required
    />
    { model&&(<>
        <p className="text-danger py-3 fst-italic"> Error : password should be same!! 
    <button className="btn btn-light text-muted fw-bold pb-2" onClick={closeModel}>close</button> </p>
    </>)
        
    } 
  </div>
  <div className="d-grid gap-2 mt-4">
  <button className="btn btn-primary" type="submit">Sign up</button>
</div>
</form>
            </div>
        </div>

            
        </div>
    )
}

export default Signup
