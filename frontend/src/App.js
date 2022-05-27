import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Navbar from "./components/navbar";
import AddUser from "./components/add-user"
import AddRole from "./components/add-role"
import GetUsers from "./components/get-users"

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
