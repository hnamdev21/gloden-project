import cn from "classnames";
import React from "react";

type FieldContainerProps = React.HTMLProps<HTMLDivElement>;

const FieldContainer = ({ children, className, ...props }: FieldContainerProps) => {
  return (
    <div className={cn("mb-[1.6rem]", className)} {...props}>
      {children}
    </div>
  );
};

export default FieldContainer;
