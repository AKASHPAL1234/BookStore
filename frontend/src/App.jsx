import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./component/Signup";
import Contact from "./component/Contect";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import Course from "./component/Course";


function App() {
    const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Course />}></Route>

          {/* <Route path="/course" element={authUser?<Coures />:<Navigate to="/signup"></Navigate>}></Route> */}
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contect" element={<Contact />}></Route>


        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
