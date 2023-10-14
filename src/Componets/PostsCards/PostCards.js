import React,{useContext} from 'react'
import Heart from '../../assets/Heart'
import {PostContext} from "../../contextStore/PostContext";
import "./postcards.css"
import { useNavigate } from 'react-router';


function PostCards({product,index}) {
    let {setPostContent} = useContext(PostContext)//at the time of onClick on post ,the specified post item assigned to postContent by setPostContent function and it will be stored in a global context PostContext
 
    const navigation=useNavigate()//at the time of onClick on post , we want redirect to the view post page

    return (
      <div className="card" key={index} onClick={()=>{
        setPostContent(product)
        navigation("/view")
      }}>
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">Rs:{product.price}</p>
          <span className="category"> {product.category} </span>
          <p className="name"> {product.name}</p>
        </div>
        <div className="date">
          <span>{product.createdAt}</span>
        </div>
      </div>
       
    )
}

export default PostCards