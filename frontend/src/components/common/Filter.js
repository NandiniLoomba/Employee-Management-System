import React from "react";
import ShowRoles from "./show-roles";

function Filter() {
  return (
    <>
      <select
        name="gender"
        defaultValue=""
        className="dropDown"
        onChange={onChange}
        required="true"
        multiple
      >
       <ShowRoles></ShowRoles>
      </select>
    </>
  );
}

export default Filter;
