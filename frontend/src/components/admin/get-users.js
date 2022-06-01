import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ListGroup, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function Users() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    if (Users.length === 0) {
      getUsers();
    }
  });

  const getUsers = async () => {
    const users = await axios.get("/get-users");
    setUsers(users.data);
  };
  var rows = [];

  for (var i = 0; i < Users.length; i++) {
    const fname = Users[i].fname;
    const lname = Users[i].lname;
    const role = Users[i].role;
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
        <Button variant="primary">
          <FontAwesomeIcon icon={faUserPen} />
          <span className="visually-hidden">unread messages</span>
        </Button>
        <Button variant="danger">
          <FontAwesomeIcon icon={faTrash} />
          <span className="visually-hidden">unread messages</span>
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
