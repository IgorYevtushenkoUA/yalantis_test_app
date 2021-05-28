import React from "react";
import EmployeeSide from "./components/employee/EmployeeSide";
import BirthSide from "./components/birth/BirthSide";
import { useState } from "react";

const Main = (props) => {
  const [employeesBirth, setEmployeesBirth] = useState(
    new Map(JSON.parse(localStorage.getItem("employeesData")))
  );

  let employees = props.employees;

  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let months = new Map([
    [0, "May"],
    [1, "June"],
    [2, "July"],
    [3, "August"],
    [4, "September"],
    [5, "October"],
    [6, "November"],
    [7, "December"],
    [8, "January"],
    [9, "February"],
    [10, "March"],
    [11, "April"],
  ]);

  const monthCoeff = 4;

  const compare = (a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  };

  const getMonthId = (month) => {
    let id = month <= 3 ? monthCoeff * 2 + month : month - monthCoeff;
    return id;
  };

  // todo improve
  const getEmployeesId = () => {
    let val = employeesBirth.values();
    let employeesId = [];
    for (let i = 0; i < employeesBirth.size; i++) {
      let arr = val.next().value.map((a) => a.id);
      employeesId = employeesId.concat(arr);
    }
    return employeesId;
  };

  const setLocalStorage = (employeeMap) => {
    localStorage.setItem(
      "employeesData",
      JSON.stringify(Array.from(employeeMap.entries()))
    );
  };

  // todo do better
  const groupEmployeesBySurname = (employees) => {
    let sortedEmployees = new Map();
    for (let i = 0; i < employees.length; i++) {
      let letter = employees[i].lastName[0].toLowerCase();
      if (!sortedEmployees.has(letter)) {
        sortedEmployees.set(letter, []);
      }
      let updatedValue = sortedEmployees.get(letter);
      updatedValue.push(employees[i]);
      updatedValue.sort(compare);
      sortedEmployees.set(letter, updatedValue);
    }
    return new Map([...sortedEmployees.entries()].sort());
  };

  const addEmployee = (employee) => {
    let employeeMap = new Map(employeesBirth);
    let monthId = getMonthId(new Date(employee.dob).getMonth());
    if (!employeeMap.get(monthId)) {
      employeeMap.set(monthId, [employee]);
    } else if (
      employeeMap.get(monthId).filter((i) => i.id == employee.id).length == 0
    ) {
      let employeesList = employeeMap.get(monthId);
      employeesList.push(employee);
      employeesList.sort(compare);
      employeeMap.set(monthId, employeesList);
    }
    employeeMap = new Map([...employeeMap.entries()].sort());
    setLocalStorage(employeeMap);
    setEmployeesBirth(employeeMap);
  };

  const removeEmployee = (employee) => {
    let employeeMap = new Map(employeesBirth);
    let monthId = getMonthId(new Date(employee.dob).getMonth());
    let employeeList = employeeMap.get(monthId);
    if (!!employeeList) {
      employeeList = employeeList.filter((e) => e.id != employee.id);
      if (employeeList.length == 0) employeeMap.delete(monthId);
      else employeeMap.set(monthId, employeeList);
    }
    setLocalStorage(employeeMap);
    setEmployeesBirth(employeeMap);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr" }}>
      <div>
        <EmployeeSide
          employees={groupEmployeesBySurname(employees)}
          alphabet={alphabet}
          addEmployee={addEmployee}
          removeEmployee={removeEmployee}
          employeesId={getEmployeesId()}
        />
      </div>

      <div>
        <BirthSide employeesBirth={employeesBirth} months={months} />
      </div>
    </div>
  );
};

export default Main;
