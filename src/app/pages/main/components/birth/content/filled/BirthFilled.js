import React from "react";
import EmployeeMonth from "./employeeMonth/EmployeeMonth";

const BirthFilled = (props) => {
  return (
    <div>
      {[...props.employeesBirth.keys()].map((monthId, key) => (
        <EmployeeMonth
          key={key}
          monthId={monthId}
          monthName={props.months.get(monthId)}
          employees={props.employeesBirth.get(monthId)}
        />
      ))}
    </div>
  );
};

export default BirthFilled;
