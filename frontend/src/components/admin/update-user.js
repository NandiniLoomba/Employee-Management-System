import { useEffect, useState } from "react";
import "../style.css";
import FormInput from "../common/FormInputs";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ShowRoles from "../common/show-roles";

const AddUser = (props) => {
  const { state } = useLocation();
  const [error, setError] = useState("");
  const inputs = require("../common/validation.json");
  const navigate = useNavigate();
  const { _id, email, lname, fname, dob, phone, gender, role, password } =
    state.user;
  const [values, setValues] = useState({
    _id,
    email,
    lname,
    fname,
    dob,
    phone,
    gender,
    role,
    password,
  });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, email, lname, fname, dob, phone, gender, role, password } =
      values;

    const res = await axios.post("/update-user", {
      _id,
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
        <h1>UPDATE USER</h1>
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
          required="true"
        >
          <ShowRoles></ShowRoles>
        </select>
        <br></br>
        <label>Gender</label>
        <br></br>
        <select
          name="gender"
          defaultValue={values["gender"]}
          className="dropDown"
          onChange={onChange}
          required="true"
        >
          <option value="" selected disabled>
            Select an Option
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div style={{ color: "red" }}>{error}</div>
        <button className="submitButton">Update</button>
      </form>
    </div>
  );
};

export default AddUser;
