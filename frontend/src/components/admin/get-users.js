import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, ListGroup, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function Users() {
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Users.length === 0) {
      getUsers();
    }
  });
  const updateUser = async (user) => {
    navigate("/update-user", { state: { user: user } });
  };

  const deleteUser = async (userId) => {
    const res = await axios.post("/delete-user", { id: userId });
    setUsers(Users.filter((item) => item._id !== userId));
    console.log(res);
  };

  const getUsers = async () => {
    const users = await axios.get("/get-users");
    setUsers(users.data);
  };
  var rows = [];

  for (var i = 0; i < Users.length; i++) {
    const user = Users[i];
    const fname = Users[i].fname;
    const lname = Users[i].lname;
    const role = Users[i].role;
    const userId = Users[i]._id;

    rows.push(
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {fname} {lname}
          </div>
          {role}
        </div>
        <Button variant="primary" onClick={() => updateUser(user)}>
          <FontAwesomeIcon icon={faUserPen} />
        </Button>
        <Button variant="danger" onClick={() => deleteUser(userId)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </ListGroup.Item>
    );
  }

  return (
    <>
      <div style={{ "margin-top": "50px" }}>
        <Stack gap={2} className="col-md-5 mx-auto">
          <ListGroup as="ol" numbered>
            {rows}
          </ListGroup>
        </Stack>
      </div>
    </>
  );
}

export default Users;
