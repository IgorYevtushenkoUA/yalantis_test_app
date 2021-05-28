import React from 'react';

const EmployeeItem = (props) => {

    return (
        <div>
            {props.employeeItem.lastName} {props.employeeItem.firstName} - {new Date(props.employeeItem.dob).getUTCDate()} {props.monthName} {new Date(props.employeeItem.dob).getFullYear()}
        </div>
    );
};

export default EmployeeItem;