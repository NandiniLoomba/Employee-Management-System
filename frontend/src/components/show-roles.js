import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowRoles() {
  const [Roles, setRoles] = useState([]);

  useEffect(() => {
    if (Roles.length === 0) {
      getRoles();
    }
  });

  const getRoles = async () => {
    const roles = await axios.get("/get-roles");
    setRoles(roles.data);
  };

  var rows = [];

  for (var i = 0; i < Roles.length; i++) {
    const value = Roles[i].role;
    rows.push(<option value={value}>{value}</option>);
  }

  return <>{rows}</>;
}

export default ShowRoles;
