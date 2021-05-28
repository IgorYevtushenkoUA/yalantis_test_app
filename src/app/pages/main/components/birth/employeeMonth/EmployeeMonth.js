import React from "react";
import EmployeeItem from "./item/EmployeeItem";

const EmployeeMonth = (props) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      {props.monthName}
      <ul>
        {props.employees.map((employeeItem, key) => (
          <li style={{ marginLeft: "-20px" }}>
            <EmployeeItem
              key={key}
              employeeItem={employeeItem}
              monthName={props.monthName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeMonth;
