import React from 'react'
import "../Style/Pagination.css"
import {GrPrevious,GrNext} from "react-icons/gr"
const Pagination = ({ totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
  return (
    <div className='pagination'>
        <button onClick={()=>{
     if(currentPage >1){
        setCurrentPage(currentPage-1);
     }
}}  className="prev"><GrPrevious/></button>
    {pages.map((page, index) => {
        return (
         
           <div className="m">
            <button 
                key={index}
                onClick={() => setCurrentPage(page)}
                className={page == currentPage ? "active" : ""}>
                {page}
            </button>
            </div>
          
        );
    })}
    <button onClick={()=>{
    if(currentPage< pages.length){
        setCurrentPage(currentPage+1);
    }
    }} className="next"><GrNext/></button>
</div>
  )
}

export default Pagination