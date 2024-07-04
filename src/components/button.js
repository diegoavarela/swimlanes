import React from "react";

const Button = ({ addElement, align, element }) => {
  return (
    <button
      onClick={addElement}
      className={`p-2 mt-2 hover:text-blue-300 text-xl ${align}`}
      title={`Add ${element}`}
    >
      <i className="bi bi-plus-circle"></i>
    </button>
  );
};

export default Button;
