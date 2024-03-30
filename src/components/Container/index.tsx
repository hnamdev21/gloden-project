import React from "react";

type ContainerProps = React.PropsWithChildren;

const Container = ({ children }: ContainerProps) => {
  return <div>{children}</div>;
};

export default Container;
