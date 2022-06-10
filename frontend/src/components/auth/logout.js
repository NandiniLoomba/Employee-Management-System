import axios from "axios";
import React, { useContext } from "react";
import { UserAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../style.css"

function Logout() {
  const { auth, setAuth } = useContext(UserAuth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.get("/logout");
    setAuth(res.data.validity);
    navigate("/");
  };
  return (
    <div className="logout">
      <h2>Are you sure that you want to logout..?</h2>
      <Button variant="danger" onClick={handleSubmit}>
        Logout
      </Button>{" "}
    </div>
  );
}

export default Logout;
