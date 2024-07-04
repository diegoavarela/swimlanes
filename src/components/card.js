import React from "react";

const Card = ({ handleEnterPress, newCard }) => {
    return newCard ? (
      <input
        type="text"
        className="p-2 mt-2 bg-slate-400 text-slate-700 rounded-lg outline-none"
        onKeyDown={handleEnterPress}
      />
    ) : null;
  };

export default Card;