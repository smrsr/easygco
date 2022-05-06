import React, { useEffect } from "react";
import { useFormik } from "formik";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import axios from "axios";

//Form schema
const formSchema = Yup.object({
   email: Yup.string()
      .required("Email is required")
      .email("Invalid email Address")
      .max(128, "must be less than 128 characters"),
   password: Yup.string()
      .required("Password is required")
      .min(3, "length must be between 3 & 64 characters")
      .max(64, "length must be between 3 & 64 characters"),
});

const Login = () => {
   // axios.defaults.withCredentials = true;
   const Axios = axios.create({
      withCredentials: true,
   });
   const [isError, setIsError] = React.useState();
   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      onSubmit: async (values) => {
         Axios.post(`/api/app/v1/?a=operation&b=accounts&c=login`, null, {
            params: {
               "data[email]": values.email,
               "data[password]": values.password,
            },
         }).then((response) => setIsError(response));
      },
      validationSchema: formSchema,
   });
   const navigate = useNavigate();

   useEffect(() => {
      if (isError?.data?.status === "success") {
         navigate(`/account`);
      }
   }, [navigate, isError]);

   return (
      <div className="container flex flex-col-reverse lg:flex-row mx-auto min-h-screen  bg-gray-900 xl:w-10/12">
         <div className="flex  w-full  lg:w-1/2 mt-20 mb-auto ">
            <form
               onSubmit={formik.handleSubmit}
               className="flex flex-col w-full lg:ml-20 lg:w-4/6 justify-center rounded-lg gap-3 bg-gray-600">
               <h1 className="flex text-2xl font-bold text-gray-100 my-14 justify-center">
                  Login to your Account
               </h1>
               {isError?.data?.status === "failed" && (
                  <h1 className="flex  text-red-500  justify-center">{isError?.data?.message}</h1>
               )}
               <label className="relative flex flex-row items-center w-full text-gray-400 focus-within:text-gray-200 rounded-full">
                  <AtSymbolIcon className="absolute w-8 h-8 ml-7" />
                  <input
                     type="text"
                     className="bg-gray-700 rounded-full w-full  mx-5 focus:outline-none pl-14 pr-4 py-4"
                     placeholder="Email"
                     name="email"
                     value={formik.values.email}
                     onChange={formik.handleChange("email")}
                     onBlur={formik.handleBlur("email")}
                  />
               </label>

               <div className="text-red-400 mb-2">{formik.touched.email && formik.errors.email}</div>
               <label className="relative flex flex-row items-center text-gray-400 focus-within:text-gray-200 rounded-full">
                  <LockClosedIcon className="absolute w-8 h-8 ml-7" />
                  <input
                     type="password"
                     className="bg-gray-700 rounded-full w-full mx-5 focus:outline-none pl-14 pr-4 py-4"
                     placeholder="Password"
                     value={formik.values.password}
                     onChange={formik.handleChange("password")}
                     onBlur={formik.handleBlur("password")}
                     name="password"
                  />
               </label>

               <div className="text-red-400 mb-2">{formik.touched.password && formik.errors.password}</div>

               <button
                  type="submit"
                  className="text-lg text-bold text-gray-100 bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-full w-2/3 mx-auto mt-10 mb-16">
                  Login
               </button>
            </form>
         </div>
         <div className="flex flex-col justify-center items-center   w-full lg:w-1/2 lg:min-h-screen ">
            <h1 className="text-6xl font-extrabold text-gray-50">Ready to start? </h1>
            <h1 className=" text-6xl font-extrabold text-gray-50">Login Now. </h1>
         </div>
      </div>
   );
};

export default Login;
