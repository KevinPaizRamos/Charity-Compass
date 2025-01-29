import React from "react";

const TextField = () => {
  return (
    <div classname="textfield">
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default TextField;
