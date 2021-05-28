import React from 'react';
import EmployeesList from "./list/EmployeesList";
import EmptyEmployeesList from "./list/empty/EmptyEmployeesList";

const Alphabet = (props) => {
    return (
        <div>
            <h4>{props.letter.toUpperCase()}</h4>
            <EmployeesList employees={props.employees}
                           addEmployee={props.addEmployee}
                           removeEmployee={props.removeEmployee}
                           employeesId={props.employeesId}
            />
        </div>
    );
};

export default Alphabet;