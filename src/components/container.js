import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex items-center flex-col -mt-32 w-full">
      <div className="flex-shrink-1 bg-white rounded shadow-lg p-4 w-full md:w-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
