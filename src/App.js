import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./Account";
import Transanctions from "./Transanctions";
import Payments from "./Payments";
import Paysystems from "./Paysystems";
import NavBar from "./NavBar";
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<NavBar />}>
               <Route path="account" element={<Account />} />
               <Route path="transanctions" element={<Transanctions />} />
               <Route path="payments" element={<Payments />} />
               <Route path="paysystems" element={<Paysystems />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
