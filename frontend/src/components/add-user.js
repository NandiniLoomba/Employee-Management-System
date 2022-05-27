import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./styles/form.css";

function AddUser() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    role: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e.target);

    setData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return {
        ...prevData,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, lname, fname, dob, phone, gender, role, password } = data;

    axios
      .post("/add-user", {
        email,
        lname,
        fname,
        dob,
        phone,
        gender,
        role,
        password,
      })
      .then(() => {
        console.log("Successfull..");
        navigate("/update-user");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="userForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={data.email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={data.fname}
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={data.lname}
            name="lname"
            type="text"
            placeholder="Last Name"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={data.phone}
            name="phone"
            type="text"
            placeholder="Phone Number"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            value={data.dob}
            name="dob"
            type="text"
            placeholder="DOB"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            value={data.gender}
            name="gender"
            type="text"
            placeholder="Gender"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Role</Form.Label>
          <Form.Control
            value={data.role}
            name="role"
            type="text"
            placeholder="Role"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={data.password}
            name="password"
            type="text"
            placeholder="Password"
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddUser;
