import React from "react";
import EmployeeMonth from "./employeeMonth/EmployeeMonth";

const BirthSide = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Employees birthday</h3>
      </div>

      <div style={{ marginLeft: "10%", borderTop: "1px solid black" }}>
        {[...props.employeesBirth.keys()].map((monthId, key) => (
          <EmployeeMonth
            key={key}
            monthId={monthId}
            monthName={props.months.get(monthId)}
            employees={props.employeesBirth.get(monthId)}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthSide;
