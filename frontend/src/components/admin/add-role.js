import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from "../common/FormInputs";

function AddRole() {
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/add-role", {
      role,
    });
    if (res.data.validity === 0) {
      setError(res.data.error);
    } else {
      navigate("/add-user");
    }
  };

  const onChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>ADD ROLE</h1>

        <FormInput
          name="role"
          type="text"
          placeholder="Enter a new role..!"
          value={role}
          onChange={onChange}
          errorMessage="Role should be 3-16 characters and shouldn't include any special character!"
          pattern="^[A-Za-z0-9]{3,16}$"
          required="true"
        />
        <div style={{ color: "red" }}>{error}</div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default AddRole;
