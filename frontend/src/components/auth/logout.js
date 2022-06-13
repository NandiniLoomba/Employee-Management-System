import axios from "axios";
import React, { useContext } from "react";
import { UserAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../style.css";

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
    <>
      <Card bg={"info"} className="logout">
        <Card.Header>Logout</Card.Header>
        <Card.Body>
          <Card.Text>Are you sure that you want to logout..?</Card.Text>
          <Button variant="danger" onClick={handleSubmit}>
            Logout
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Logout;
