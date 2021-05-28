import React from "react";
import BirthEmpty from "./empty/BirthEmpty";
import BirthFilled from "./filled/BirthFilled";

const BirthContent = (props) => {
  return (
    <div>
      {props.employeesBirth.size == 0 ? (
        <BirthEmpty />
      ) : (
        <BirthFilled
          employeesBirth={props.employeesBirth}
          months={props.months}
        />
      )}
    </div>
  );
};

export default BirthContent;
