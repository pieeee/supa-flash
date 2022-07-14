import React from "react";
import cn from "classnames";

const Container: React.FC<{
  children?: JSX.Element | JSX.Element[];
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "px-4 sm:px-12 md:px-16 lg:px-24 xl:px-30 2xl:px-48",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
