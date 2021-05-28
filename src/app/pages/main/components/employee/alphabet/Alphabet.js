import React from "react";
import EmployeesList from "./list/EmployeesList";

const Alphabet = (props) => {
  return (
    <div>
      <h4>{props.letter.toUpperCase()}</h4>
      <EmployeesList
        employees={props.employees}
        addEmployee={props.addEmployee}
        removeEmployee={props.removeEmployee}
        employeesId={props.employeesId}
      />
    </div>
  );
};

export default Alphabet;
