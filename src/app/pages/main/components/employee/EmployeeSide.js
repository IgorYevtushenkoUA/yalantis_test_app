import React from "react";
import Alphabet from "./alphabet/Alphabet";

const EmployeeSide = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Employees</h3>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 4fr 4fr",
          borderRight: "1px solid black",
          paddingLeft: "5%",
        }}
      >
        {props.alphabet.map((letter, key) => (
          <Alphabet
            key={key}
            letter={letter}
            employees={props.employees.get(letter)}
            addEmployee={props.addEmployee}
            removeEmployee={props.removeEmployee}
            employeesId={props.employeesId}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeSide;
