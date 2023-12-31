import React, { useContext,useState } from "react";
import { Navigate } from "react-router";
import { AllPostContext } from "../../contextStore/ContextAllPost";
import Pagination from "../Pagination/Pagination";
import "./allposts.css";
import PostCards from "../PostsCards/PostCards";
function AllPosts() {
  const { allPost } = useContext(AllPostContext);
  
  let length = allPost.length; //if user refresh the whole page context will be empty so we want to redirect the user to the home page
  const navigate = Navigate();

  //pagination logic and implementation will start here
  let [currentPage,setCurrentPage]=useState(1)
  let itemsPerPage=8
  let indexOfLastDish=currentPage*itemsPerPage
  let indexOfFirstDish=indexOfLastDish-itemsPerPage
  let showTheseItems=allPost.slice(indexOfFirstDish,indexOfLastDish)

  let displayThesePosts = showTheseItems.map((product, index) => {
    return (
      <div className="all-post-card" key={index}>
        {" "}
        <PostCards product={product} index={index} />{" "}
      </div>
    );
  });
  return (
    <>
      {length !== 0 ? (
        <div className="display-all-parent">
          <div className="container-allpost">{displayThesePosts}</div>
          <Pagination setCurrentPage={setCurrentPage}/>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default AllPosts;