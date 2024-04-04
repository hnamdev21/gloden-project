import React from "react";

import Button from "@/components/Button";
import Typography from "@/components/Typography";

type NavItem = {
  label: string;
  path: string;
};

type NavColumnProps = {
  label: string;
  items: Array<NavItem>;
  className?: string;
};

const NavColumn = ({ label, items, className = "" }: NavColumnProps) => {
  return (
    <div className={className}>
      <Typography className="mb-[.8rem] " tag="h6" textColor="light" weight="thin">
        {label}
      </Typography>

      <nav className="flex flex-col">
        {items.map((item) => (
          <Button key={item.label} href={item.path} variant="text" weight="extrabold" textColor="white">
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default NavColumn;
