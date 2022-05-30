import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function AddRole() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/add-role", {
        role
      })
      .then(() => {
        navigate("/add-user");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="userForm">
      <h3 className="heading">Add a new role..!</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Role</Form.Label>
          <Form.Control
            value={role}
            type="text"
            placeholder="Enter a new role..!"
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
     
     
    </>
  );
}

export default AddRole;


