import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';

import Loader from './Loader';
import '../Style/Home.css'
import DataMap from './DataMap';
import Pagination from "./Pagination"
const Home = () => {
  const [myData, setMyData] = useState([]);
 
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);



  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
      );
      setMyData(data);

      console.log(data);
      setLoading(false);
    };
    getData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = myData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='home-c'>
    {loading ? (
      <Loader />
    ) : (
      <>
     <h4>Analystt.ai Intern Assignment</h4>
        <DataMap myData={currentPosts}/>
        <Pagination totalPosts={myData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
      </>
    )}
   
  </div>
  )
}

export default Home