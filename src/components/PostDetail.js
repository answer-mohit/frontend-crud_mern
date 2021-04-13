import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { AppContext } from './context';
function PostDetail() {
    const history=useHistory();
    const{id}=useParams();
    const [product,setproduct]=useState('');
const {loading,noLoading}=useContext(AppContext);

const fetchApi=async()=>{
    const result=await axios.get(`/posts/${id}`);
    // console.log(result.data);
setproduct(result.data);
noLoading();
}

useEffect(()=>{
    fetchApi();
},[]);

if(loading){
    return(<h1 className="text-center fw-bold">loading...</h1>)
}




    return (
        <div>
            {/* <button className="btn px-3 m-2 text-primary fw-bold" onClick={()=>history.push('/')}> Go back</button> */}
            <div className="card mb-3 pb-5">
  <img src={`https://source.unsplash.com/collection/${product.title}/1600x900`} className="card-img-top" alt={product.title}/>
  <div className="card-img-overlay">
      <button className="btn px-3 btn-primary fw-bold" onClick={()=>history.push('/')}> Go back</button>
  </div>
  <div className="card-body">
    <h4 className="card-title text-center py-4 fw-bold">Title :-  {product.title}</h4>
    <p className="card-text text-muted fst-italic text-center">Details:- {product.body}</p>
   
   
    

</div>

  </div>
</div>



    )
}

export default PostDetail
