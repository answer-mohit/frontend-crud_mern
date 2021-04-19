import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {FiEdit} from 'react-icons/fi';
import {FaTrashRestoreAlt} from 'react-icons/fa';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";


toast.configure();
function PostItem({_id,title,body}) {
  const deleteHandler=async()=>{
const result=await axios.delete(`/delete/${_id}`);
if(result){
  toast.success('your data deleted succesfully',{position:toast.POSITION.TOP_CENTER,autoClose:false})
setTimeout(()=>{
  window.location.reload();

},2000)  
}else{
  toast.error('your data not deleted succesfully',{position:toast.POSITION.TOP_CENTER})

  alert('data not deleted');
}
}



return (<div className="col">
    <div className="card h-100">
 
  
  <NavLink exact to={`/posts/${_id}`}>
    <img src={`https://source.unsplash.com/collection/${title}/1600x900`} className="card-img-top img_active" alt="random"/>
    </NavLink>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
      <div className="d-flex justify-content-between">
    <NavLink exact className="btn btn-warning" to={`/edit/${_id}`}> 
    <FiEdit className="me-2"/>edit</NavLink>
    <button className="btn btn-danger" onClick={deleteHandler}> 
    delete
    <FaTrashRestoreAlt className="text-light ms-2"/>
    </button>

</div>
      </div>
    </div>
  </div>
 
    )
}

export default PostItem
