import React from "react";
import EmployeeMonth from "./content/filled/employeeMonth/EmployeeMonth";
import BirthContent from "./content/BirthContent";

const BirthSide = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Employees birthday</h3>
      </div>

      <div style={{ marginLeft: "10%", borderTop: "1px solid black" }}>
        <BirthContent
          months={props.months}
          employeesBirth={props.employeesBirth}
        />
      </div>
    </div>
  );
};

export default BirthSide;
