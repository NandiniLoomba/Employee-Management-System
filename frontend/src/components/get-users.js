import React from "react";
import axios from "axios";

function Users() {
  var data;
  const GetUsers = async (e) => {
    axios
      .get("/get-users")
      .then((res) => {
        console.log(res);
        data = res;
        console.log("Got it..Thank You!");
      })
      .catch((err) => console.log(err));
  };
  GetUsers();
  return (
    <>
      {data}
    </>
  );
}

export default Users;
