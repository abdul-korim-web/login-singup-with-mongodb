import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
    const navigate = useNavigate()
  const HandelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/singup`, {
        username,
        email,
        password,
      });
      if (res.data.status === 200) {
        toast.success(res.data.message,{
            onClose:()=>navigate(`/login`)
        });
        setUsername('') ;setEmail('');setpassword("")
        
      } else{
        toast.error(res.data.message)
      }
    } catch (error) {
        console.log(error);
      toast.error(error?.response?.data?.message || "server error😒")
    }
  };
  return (
    <section className="flex flex-col  justify-center items-center bg-white p-10 space-y-5 shadow-2xl rounded-2xl md:p-20  ">
      <div>
        <h2 className="text-2xl font-semibold text-blue-600 md:text-3xl  ">Sing Up</h2>
      </div>
      <div>
        <form
          action=""
          className="flex flex-col space-y-3"
          onSubmit={HandelSubmit}
        >
          <div className="flex flex-col ">
            <label htmlFor="">UserName</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="enter your username"
              className="border rounded-[15px] border-gray-300 py-1 px-3 focus:outline-blue-700"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border rounded-[15px] border-gray-300 py-1 px-3 focus:outline-blue-700"
              placeholder="enter your email"
              required
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className="border rounded-[15px] border-gray-300 py-1 px-3 focus:outline-blue-700"
              placeholder="enter your password"
              required
            />
          </div>
          <div className="flex justify-center items-center mt-2">
            <Button type="submit" variant="contained" sx={{ paddingX: "60px" }}>
              Sing Up
            </Button>
          </div>
        </form>
        <div className="mt-3">
          <p className="text-sm ">
            already an account please{" "}
            <span className="text-blue-700 underline">
              <Link to={`/login`}>login</Link>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover
        draggable
      />
    </section>
  );
};

export default SingUp;
