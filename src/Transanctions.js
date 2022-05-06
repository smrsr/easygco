import axios from "axios";
import React, { useEffect } from "react";

const Transanctions = () => {
   axios.defaults.withCredentials = true;
   useEffect(() => {
      axios
         .get("/api/app/v1/?a=format&b=datatables&c=transactions")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }, []);
   return <div>Transanctions</div>;
};

export default Transanctions;
