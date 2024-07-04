import React from "react";

const ColumnHeader = ({
  columnInputRef,
  handleEnterPressColumn,
  editColumn,
}) => {
  return (
    <div className="flex flex-row">
      <input
        ref={columnInputRef}
        type="text"
        placeholder="Column Name"
        className="column-name"
        onKeyDown={handleEnterPressColumn}
        onFocus={editColumn}
      />
      <button
        onClick={editColumn}
        className="p-2 hover:text-blue-300 text-xl"
        title="Edit Column Name"
      >
        <i className="bi bi-pencil"></i>
      </button>
    </div>
  );
};

export default ColumnHeader;
