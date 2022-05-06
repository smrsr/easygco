import axios from "axios";
import React, { useEffect } from "react";

const Account = () => {
   const [info, setInfo] = React.useState();

   axios.defaults.withCredentials = true;
   useEffect(() => {
      axios
         .get("/api/app/v1/?a=get&b=data&c=account")
         .then(function (response) {
            // handle success
            setInfo(response);
         })
         .catch(function (error) {
            // handle error
            setInfo(error);
         });
   }, []);
   return (
      <div className="">
         account
         {info?.data?.status === "success" && (
            <div className="flex flex-col justify-between">
               <table className="table-fixed border-collapse p-5 m-5	">
                  <tbody>
                     <tr>
                        <td>Email : </td>
                        <td className="p-3">{info?.data?.data.email}</td>
                     </tr>
                     <tr>
                        <td>FirstName : </td>
                        <td className="p-3">{info?.data?.data.firstname}</td>
                     </tr>
                     <tr>
                        <td>LastName : </td>
                        <td className="p-3">{info?.data?.data.lastname}</td>
                     </tr>
                     <tr>
                        <td>Birthday : </td>
                        <td className="p-3">{info?.data?.data.birthdate}</td>
                     </tr>
                     <tr>
                        <td>Company : </td>
                        <td className="p-3">{info?.data?.data.company}</td>
                     </tr>
                     <tr>
                        <td>Phone : </td>
                        <td className="p-3">{info?.data?.data.phone}</td>
                     </tr>
                     <tr>
                        <td>Country : </td>
                        <td className="p-3">{info?.data?.data.country}</td>
                     </tr>
                     <tr>
                        <td>State : </td>
                        <td className="p-3">{info?.data?.data.state}</td>
                     </tr>
                     <tr>
                        <td>City : </td>
                        <td className="p-3">{info?.data?.data.city}</td>
                     </tr>
                     <tr>
                        <td>Address : </td>
                        <td className="p-3">
                           {info?.data?.data.address_1}-{info?.data?.data.address_2}
                        </td>
                     </tr>
                     <tr>
                        <td>Zip code : </td>
                        <td className="p-3">{info?.data?.data.zip_code}</td>
                     </tr>
                  </tbody>
               </table>
               <table className="table-fixed border-collapse	">
                  <tbody>
                     <tr>
                        <td>Status : </td>
                        <td className=" h-4 rounded-md bg-red-500">
                           {info?.data?.data.is_phoneverify === 0 && "Phone Unverified"}
                        </td>
                     </tr>
                     <tr>
                        <td>Type : </td>
                        <td className="">{info?.data?.data.type}</td>
                     </tr>
                     <tr>
                        <td>Registered : </td>
                        <td className="">{info?.data?.data.date_create}</td>
                     </tr>
                     <tr>
                        <td>Accessed : </td>
                        <td className="">{info?.data?.data.date_access}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
};

export default Account;
