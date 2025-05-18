import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from 'axios';


function Freebook() {
   const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("https://bookstoree-bcm6.onrender.com/book");
          console.log(res.data);
          setBook(res.data.filter((data) => data.category === "Free"));
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }, []);
  // const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:w-full w-[40vh] md:px-10">
      <h1 className="text-3xl text-bold mx-5">Free ofred course</h1>
      <br></br>
      <p className="text-sm mx-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at illo
        nulla fugiat est libero, eaque totam dolor expedita temporibus nesciunt.
        Dignissimos debitis aperiam, alias reprehenderit tempore tempora
        voluptatum optio?
      </p>
      <div className="max-w-screen-2xl md:mx-[5vh] container mx-auto md:px-10">
       
      <Slider {...settings}>
          {book.map((item) => {
            return <Card  item={item} key={item.id} />;
          })}
        </Slider>
        
      </div>
    </div>
  );
}

export default Freebook;