import React, { ReactNode } from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`flex size-full max-w-[1200px] flex-col items-center justify-center tablet:px-10 lp:px-4 lcd:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;