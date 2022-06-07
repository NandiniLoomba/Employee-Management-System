import React, { useContext, useState } from "react";
import axios from "axios";
import "../style.css";
import { useNavigate } from "react-router-dom";
import FormInput from "../common/FormInputs";
import { UserAuth } from "./auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(UserAuth);

  const handleEmail = (e) => {
    setError("");
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setError("");
    setPassword(e.target.value);
  };

  const validEmail = {
    name: "email",
    type: "email",
    placeholder: "Enter a new email..!",
    value: email,
    label: "Email Address",
    onChange: handleEmail,
    errorMessage: "It should be a valid email address!",
    required: "true",
  };

  const validPassword = {
    name: "password",
    type: "password",
    placeholder: "Enter a password..!",
    value: password,
    label: "Password",
    onChange: handlePassword,
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    required: "true",
    pattern:
      "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/login", {
      email,
      password,
    });
    setAuth(res.data.validity);
    if (res.data.validity === 0) {
      setError(res.data.error);
    } else {
      navigate("/add-user");
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <FormInput {...validEmail} />
        <FormInput {...validPassword} />
        <div style={{ color: "red", "text-align": "center" }}>{error}</div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default Login;
