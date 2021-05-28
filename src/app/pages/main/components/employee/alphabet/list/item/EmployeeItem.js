import React from "react";

const EmployeeItem = (props) => {
  const addEmployee = () => {
    props.addEmployee(props.employee);
  };

  const removeEmployee = () => {
    props.removeEmployee(props.employee);
  };

  const notActiveStyle = {
    fontSize: "1em",
    fontWeight: "bold",
    color: "black",
  };

  const activeStyle = {
    fontSize: "1em",
    fontWeight: "bold",
    color: "blue",
  };

  return (
    <div>
      <div style={props.active ? activeStyle : notActiveStyle}>
        {props.employee.lastName} {props.employee.firstName}
      </div>
      <div>
        <form>
          <div>
            <input
              type="radio"
              value="not active"
              name="gender"
              onChange={removeEmployee}
              checked={!props.active}
            />{" "}
            <label>not active</label>
          </div>
          <div>
            <input
              type="radio"
              value="active"
              name="gender"
              onChange={addEmployee}
              checked={props.active}
            />{" "}
            <label>active</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeItem;
