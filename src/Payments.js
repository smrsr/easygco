import axios from "axios";
import React, { useEffect } from "react";

const Payments = () => {
   axios.defaults.withCredentials = true;
   useEffect(() => {
      axios
         .get("/api/app/v1/?a=format&b=datatables&c=payments")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }, []);
   return <div className="flex flex-col left-[300px]">Payments</div>;
};

export default Payments;
