import { useState } from "react";
import "../style.css";
import FormInput from "../common/FormInputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShowRoles from "./show-roles";

const AddUser = () => {
  const [error, setError] = useState("");
  const inputs = require("../common/validation.json");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    dob: "",
    password: "",
    email: "",
    phone: "",
    gender: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, lname, fname, dob, phone, gender, role, password } = values;

    const res = await axios.post("/add-user", {
      email,
      lname,
      fname,
      dob,
      phone,
      gender,
      role,
      password,
    });
    if (res.data.validity === 0) {
      setError(res.data.error);
    } else navigate("/get-users");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>ADD USER</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <label>Role</label>
        <br></br>
        <select
          name="role"
          value={values["role"]}
          className="dropDown"
          onChange={onChange}
        >
          <ShowRoles></ShowRoles>
        </select>
        <br></br>
        <label>Gender</label>
        <br></br>
        <select
          name="gender"
          value={values["gender"]}
          className="dropDown"
          onChange={onChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div style={{ color: "red", "text-align": "center" }}>{error}</div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
