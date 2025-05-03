import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)

      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };









  return (
    <>
      <div
        id="my_modal_3"
        className=" items-center flex justify-center  my-32 text-white  "
      >
        <div className="  bg-slate-600 border-[2px] border-black p-5 md:p-16 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="mt-11 ">
              <h1 className=" mt-11">Name</h1>
              <input
                placeholder="Enter full name"
                type="text"
                className="bg-slate-200 px-3 border w-full text-black"
                {...register("fullname", { required: true })}
              ></input>
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <h1 className="mt-5">Email</h1>
              <input
                placeholder="Enter Email"
                type="email"
                className="bg-slate-200 px-3 border w-full text-black"
                {...register("email", { required: true })}
              ></input>
              {errors.Email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <h1 className=" mt-11">Password</h1>
              <input
                placeholder="Enter Password"
                type="password"
                className="bg-slate-200 px-3 border w-full   text-black"
                {...register("password", { required: true })}
              ></input>
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex items-center justify-evenly">
              <button className="btn btn-secondary mt-8 mr-14">SignUp</button>

              <p className="mt-8">
                Have account?
                <a href="/" className="underline text-blue-500">
                  Login
                </a>
              </p>
            </div>
            <Link to="/">
              <div className="badge badge-secondary bg-pink-500 text-white w-20 h-10 mx-28  mt-10 ">
                Back
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
