import axios from "axios";
import React, { useEffect } from "react";

const Paysystems = () => {
   axios.defaults.withCredentials = true;
   useEffect(() => {
      axios
         .get("/api/app/v1/?a=format&b=datatables&c=paysystems_links")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }, []);
   return <div>Paysystems</div>;
};

export default Paysystems;
