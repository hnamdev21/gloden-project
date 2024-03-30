"use client";

import React from "react";

import MenuItem from "./MenuItem";

type Submenu = {
  id: string;
  label: string;
  path: string;
};

export type DropdownItem<T = Submenu> = {
  id: string;
  label: string;
  path: string;
  subItems?: DropdownItem<T>[];
};

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  menuItems: DropdownItem[];
};

const Dropdown = ({ menuItems, ...props }: DropdownProps) => {
  return (
    <div {...props}>
      {menuItems.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Dropdown;
