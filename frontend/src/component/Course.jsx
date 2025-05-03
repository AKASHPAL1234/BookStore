import React, { useEffect, useState } from "react";

import Card from "./Card";
import {Link} from "react-router-dom";
import axios from 'axios';



function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
 
  const filterData = book.filter((data) => data.category === "Free");


  return (
    <>
    <div>
      <div className=" space-y-9 text-center max-w-screen-2xl container mx-auto md:px-10">
        <div className="mt-16 pt-12">
        <h1 className="text-4xl text-bold ">
          we all delighted to have you <span className="text-pink-500">Here!:)'</span>
        </h1>
        </div>
        
        <p className="text-bold text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis
          quia vero reprehenderit iste quae eveniet at officiis incidunt
          obcaecati explicabo, consequatur magni qui nemo maxime! Quidem
          excepturi iste perspiciatis!
        </p>
        <Link to="/">
        <div className="badge badge-secondary bg-pink-500 text-white w-20 h-10 my-20">Back</div>

        </Link>
      </div>
      <div className=" grid  grid-cols-1 md:grid-cols-3 gap-2 space-y-9 text-center max-w-screen-2xl container mx-auto my-8    ">
      
          {filterData.map((item) => {
            return <Card  item={item} key={item.id} />;
          })}
       
      </div>
      </div>
    </>
  );
}

export default Course;
