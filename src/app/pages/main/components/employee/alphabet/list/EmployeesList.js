import React from "react";
import EmptyEmployeesList from "./empty/EmptyEmployeesList";
import EmployeeItem from "./iter/EmployeeItem";

const EmployeesList = (props) => {
  console.log(props.employeesId.con);

  debugger;
  if (!props.employees) {
    return <EmptyEmployeesList />;
  } else {
    return !props.employees ? (
      <EmptyEmployeesList />
    ) : (
      props.employees.map((employee) => (
        <EmployeeItem
          key={employee.id}
          employee={employee}
          addEmployee={props.addEmployee}
          removeEmployee={props.removeEmployee}
          active={props.employeesId.includes(employee.id)}
        />
      ))
    );
  }
};

export default EmployeesList;
