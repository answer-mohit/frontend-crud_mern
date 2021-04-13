import React, { useContext, useEffect, useState } from 'react'
import PostItem from './PostItem';
import axios from 'axios';
import {AppContext} from './context'
function Posts() {
    const [item,setItem]=useState([]);
const {loading,noLoading}=useContext(AppContext);
const fetchdata=async()=>{
const result=await axios.get("/read");
// console.log(result.data);
setItem(result.data);
}

useEffect(()=>{
fetchdata();
noLoading()
},[noLoading])

if (loading){
    return(
        <div>
            <h1 className="text-center">loading...</h1>
        </div>
    )
}
   

    return (
        <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                item.map((product)=>{
                    return( <PostItem key={product._id} {...product}/>)
                })
            }
        </div>
        </div>
    )
}
export default Posts

