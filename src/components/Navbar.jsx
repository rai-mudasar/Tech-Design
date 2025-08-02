"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-82 sm:max-w-xl md:max-w-2xl mx-auto z-50 text-sm sm:font-semibold sm:text-xl md:text-xl",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="#">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col items-center justify-center space-y-4 text-sm">
            <HoveredLink>Web Design</HoveredLink>
            <HoveredLink>App Developer</HoveredLink>
            <HoveredLink>Ui/UX Design</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col items-center justify-center space-y-4 text-sm">
            <HoveredLink>Artificial Intelligence</HoveredLink>
            <HoveredLink>App Development</HoveredLink>
            <HoveredLink>Data Science</HoveredLink>
            <HoveredLink>Web Development</HoveredLink>
            <HoveredLink>Graphics Designing</HoveredLink>
          </div>
        </MenuItem>
        <Link href="#">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
