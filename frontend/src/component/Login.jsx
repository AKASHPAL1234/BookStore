import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
     const userInfo = {
          email: data.email,
          password: data.password,
        };
        await axios
          .post("https://bookstoree-bcm6.onrender.com/user/login", userInfo)
          .then((res) => {
            console.log(res.data.user);
            if (res.data) {
              toast.success("login  Successfully");
              setTimeout(()=>{
                document.getElementById("my_modal_3").close();
              window.location.reload();
              localStorage.setItem("Users", JSON.stringify(res.data.user))
              Navigate(from, { replace: true });
              },2000)
              
            }
            
          })
          .catch((err) => {
            if (err.response) {
              console.log(err);
              toast.error("Error: " + err.response.data.message);
             
            }
          });
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-600 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </button>
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-11 ">
              <h1 className="mt-5">Email</h1>
              <input
                type="email"
                className="bg-slate-200 px-3 border w-full text-black"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              ></input>
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <h1 className=" mt-11">Password</h1>
              <input
                type="password"
                className="bg-slate-200 px-3 border w-full text-black "
                placeholder="Enter password"
                {...register("password", { required: true })}
              ></input>
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex items-center justify-evenly">
              <button className="btn btn-secondary mt-8 mr-14">Login</button>
              <Link to="/signup">
                <p className="mt-8">
                  Not register?{" "}
                  <span className="underline text-blue-500">Signup</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
