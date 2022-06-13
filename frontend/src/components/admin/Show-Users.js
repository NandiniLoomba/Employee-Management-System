import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import Pagination from "../common/Pagination";
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShowRoles from "../common/show-roles";

function Users() {
  const [Users, setUsers] = useState([]);
  const [Positions, setPositions] = useState(Users);
  const [Role, setRole] = useState("");

  useEffect(() => {
    if (Users.length === 0) {
      getUsers();
    }
  });

  useEffect(() => {
    setPositions(Users);
  }, [Users]);

  useEffect(() => {
    if (Role === "All") {
      setPositions(Users);
    } else {
      setPositions(() =>
        Users.filter((user) => {
          return user.role === Role;
        })
      );
    }
  }, [Role]);

  const getUsers = async () => {
    const users = await axios.get("/get-users");
    setUsers(users.data);
  };
  const navigate = useNavigate();

  const updateUser = async (user) => {
    navigate("/update-user", { state: { user: user } });
  };

  const deleteUser = async (userId) => {
    const res = await axios.post("/delete-user", { id: userId });
    setUsers(Users.filter((item) => item._id !== userId));
    console.log(res);
  };
  const onChange = (e) => {
    setRole(e.target.value);
  };

  const headers = [
    { label: "First Name", key: "fname" },
    { label: "Last Name", key: "lname" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    { label: "Role", key: "role" },
    { label: "Gender", key: "gender" },
    { label: "DOB", key: "dob" },
  ];
  return (
    <>
      <div>
        <div style={{ marginTop: "25px" }} className="topPart">
          <div>
            <CSVLink
              data={Positions}
              separator={";"}
              headers={headers}
              filename={"Users.csv"}
              className="btn downloadBtn"
              target="_blank"
            >
              Download {Role}
              {Role && Role!=="All" && "s"}
              {!Role && "Users"}
            </CSVLink>
          </div>
          <div>
            <ShowRoles value={Role} onChange={onChange} extra="All"></ShowRoles>
          </div>
        </div>
        <Pagination
          Users={Positions}
          deleteUser={deleteUser}
          updateUser={updateUser}
        ></Pagination>
      </div>
    </>
  );
}

export default Users;
