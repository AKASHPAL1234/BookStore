import React from "react";

function Card({ item }) {

  return (
    <>
      <div className="max-w-screen-2xl container  mx-auto md:px-10 my-10 md:hover:scale-105 duration-200  dark:bg-slate-600 dark:text-white dark:border">
        <div className="card bg-base-100 w-80  md:gap-5 md:p-0 gap-4 p-5 shadow-sm mx-auto dark:bg-slate-600 dark:text-white">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-secondary ">Buy</div>
              <div className="text-xl text-bold ">₹{item.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
