import { useState } from "react";
import "../style.css";
import FormInput from "../common/FormInputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShowRoles from "../common/show-roles";

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
    setError("");
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

        <ShowRoles value={values["role"]} onChange={onChange}></ShowRoles>
        
        <br></br>
        <select
          name="gender"
          defaultValue={values["gender"]}
          className="dropDown"
          onChange={onChange}
          required="true"
        >
          <option value="" disabled>
            Select a Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div style={{ color: "red" }}>{error}</div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
