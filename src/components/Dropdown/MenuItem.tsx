"use client";

import React from "react";

import { DropdownItem } from ".";

const MenuItemComponent = ({ id, label, path, subItems }: DropdownItem) => {
  const [isOpen, setIsOpen] = React.useState(false);

  isOpen;

  return (
    <ul>
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        {label}
      </div>

      {subItems && (
        <li>
          {subItems.map((child) => (
            <MenuItemComponent key={child.id} {...child} />
          ))}
        </li>
      )}
    </ul>
  );
};

const MenuItem = React.memo(MenuItemComponent);

export default MenuItem;
