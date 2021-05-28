import React from "react";
import EmployeeItem from "./item/EmployeeItem";

const EmployeeMonth = (props) => {
  return (
    <div>
      {props.monthName}
      <ul>
        {props.employees.map((employeeItem, key) => (
          <li>
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
