import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import Navbar from "./components/common/navbar";
import AddUser from "./components/admin/add-user";
import AddRole from "./components/admin/add-role";
import ShowUsers from "./components/admin/Show-Users";
import UpdateUser from "./components/admin/update-user";
import ErrorPage from "./components/common/ErrorPage";
import { UserAuth } from "./components/auth/auth";
import Logout from "./components/auth/logout";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    if (auth === null) {
      isAuth();
    }
  }, []);
  const isAuth = async () => {
    const res = await axios.get("/isLogin");
    setAuth(res.data.validity);
  };

  return (
    <>
      <Router>
        <UserAuth.Provider value={{ auth, setAuth }}>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={auth===0 ? <Login /> : <Logout />}></Route>
            <Route exact path="/add-user" element={auth===1 ? <AddUser /> : <Login />} />
            <Route exact path="/get-users" element={auth===1 ? <ShowUsers /> : <Login />} />
            <Route exact path="/add-role" element={auth===1 ? <AddRole /> : <Login />} />
            <Route exact path="/update-user" element={auth===1 ? <UpdateUser /> : <Login />} />
            <Route exact path="/logout" element={auth===1 ? <Logout /> : <Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
   
        </UserAuth.Provider>
      </Router>
    </>
  );
}

export default App;
