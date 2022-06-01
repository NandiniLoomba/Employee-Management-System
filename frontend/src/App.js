import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import Navbar from "./components/common/navbar";
import AddUser from "./components/admin/add-user"
import AddRole from "./components/admin/add-role"
import GetUsers from "./components/admin/get-users"



function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/get-users" element={<GetUsers />} />
          <Route path="/add-role" element={<AddRole />} />
        </Routes>
      </Router>
     
    
    </>
  );
}

export default App;
