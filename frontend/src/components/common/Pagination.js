import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, ListGroup, Stack } from "react-bootstrap";
import { faUserPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import "../style.css";

function Pagination({ Users, deleteUser, updateUser }) {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const usersVisited = pageNumber * usersPerPage;

  const displayUsers = Users.slice(
    usersVisited,
    usersVisited + usersPerPage
  ).map((user) => {
    const fname = user.fname;
    const lname = user.lname;
    const role = user.role;
    const userId = user._id;
    return (
      <>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          key={userId}
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
      </>
    );
  });
  const pageCount = Math.ceil(Users.length / usersPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  
  return (
    <>
      <Stack gap={2} className="col-md-5 mx-auto">
        <ListGroup as="ol">{displayUsers}</ListGroup>
      </Stack>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default Pagination;
