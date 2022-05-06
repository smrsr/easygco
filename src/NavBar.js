import React, { useEffect, useState } from "react";
import {
   CreditCardIcon,
   CurrencyDollarIcon,
   LinkIcon,
   LogoutIcon,
   MenuIcon,
   XIcon,
} from "@heroicons/react/outline";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
const NavBar = ({ children }) => {
   const [openMenu, setOpenMenu] = useState("true");
   const [data, setData] = React.useState();

   const handleMenu = () => {
      setOpenMenu(!openMenu);
   };
   axios.defaults.withCredentials = true;

   useEffect(() => {
      axios
         .get("/api/app/v1/?a=get&b=data&c=account")
         .then(function (response) {
            // handle success

            setData(response);
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            setData(error);
         });
   }, []);

   const navigate = useNavigate();

   useEffect(() => {
      if (data?.data?.status === "failed") {
         navigate(`/login`);
      }
   }, [navigate, data]);
   return (
      <>
         <span className="absolute text-white text-4xl top-1 left-5 cursor-pointer" onClick={handleMenu}>
            {openMenu && (
               <MenuIcon className=" cursor-pointer  hover:text-yellow-300 h-16 w-16 text-gray-800" />
            )}
         </span>
         <div className="min-w-full text-white bg-gray-800 flex ">
            <div
               className={
                  !openMenu
                     ? " fixed top-0 bottom-0 lg:left-0  duration-1000 p-2  w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen"
                     : "left-[-300px] fixed  top-0 bottom-0 lg:left-0  duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen"
               }>
               <div className="text-gray-100 text-xl">
                  <div className="p-2.5 mt-1 flex items-center rounded-md ">
                     <i className=" px-4 py-1 bg-blue-600 rounded-md">&gt;</i>
                     <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">EASYGCO</h1>
                     <div
                        className={openMenu ? "ml-20 cursor-pointer lg:hidden " : "ml-20 cursor-pointer flex"}
                        onClick={handleMenu}>
                        {!openMenu && (
                           <XIcon
                              className="cursor-pointer hover:text-red-700 h-10 w-10 text-yellow-300"
                              aria-hidden="true"
                           />
                        )}
                     </div>
                  </div>
                  <hr className="my-2 text-gray-600" />

                  <div>
                     <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <Link to="/account">
                           <span className="text-[15px] ml-4 text-gray-200">Account</span>
                        </Link>
                     </div>

                     <hr className="my-4 text-gray-600" />
                     <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <Link to="/payments">
                           {" "}
                           <CreditCardIcon className=" w-8 h-8 ml-7" />
                           <span className="text-[15px] ml-4 text-gray-200">Payments</span>
                        </Link>
                     </div>
                     <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <Link to="/transanctions">
                           <CurrencyDollarIcon className=" w-8 h-8 ml-7" />

                           <span className="text-[15px] ml-4 text-gray-200">Transactions</span>
                        </Link>
                     </div>
                     <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <Link to="/paysystems">
                           <LinkIcon className=" w-8 h-8 ml-7" />
                           <span className="text-[15px] ml-4 text-gray-200">Links</span>
                        </Link>
                     </div>

                     <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <div className="">
                           {" "}
                           <LogoutIcon className=" flex   w-8 h-8 ml-7" />
                           <span className="text-[15px] ml-4 text-gray-200">Logout</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="lg:pl-[300px] flex flex-col w-full">
               <div className=" min-w-full h-16 flex  items-center justify-end pr-2 bg-blue-600">
                  <div className="flex items-center text-white mr-2"> {data?.data?.data?.email}</div>
                  <div className="w-14 h-14 rounded-full flex  items-center justify-center bg-white"></div>
               </div>
               <div className=" min-h-screen flex  justify-self-auto pr-2 text-white bg-gray-800">
                  <Outlet />
                  {children}
               </div>
            </div>
         </div>
      </>
   );
};

export default NavBar;
