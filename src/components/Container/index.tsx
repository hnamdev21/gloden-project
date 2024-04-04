import cn from "classnames";
import React from "react";

type ContainerProps = React.PropsWithChildren & {
  className?: string;
};

const Container = ({ className = "", children }: ContainerProps) => {
  return <div className={cn("mx-auto lg:max-w-screen-xl", className)}>{children}</div>;
};

export default Container;
