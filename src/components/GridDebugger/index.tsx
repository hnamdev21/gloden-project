"use client";

import cn from "classnames";
import React from "react";

const GridDebugger = () => {
  const [isGird, setIsGrid] = React.useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "g") {
      setIsGrid((prev) => !prev);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={cn("grid-debug", `${isGird ? "" : "hidden"}`)}>
      <div className="container max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-12 xs:grid-cols-6 sm:grid-cols-8 gap-[3rem]">
          <div className="col-span-1 debug_col"></div>
          <div className="col-span-1 debug_col"></div>
          <div className="col-span-1 debug_col"></div>
          <div className="col-span-1 debug_col"></div>
          <div className="col-span-1 debug_col"></div>
          <div className="col-span-1 debug_col"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
          <div className="col-span-1 debug_col xs:hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
};

export default GridDebugger;
