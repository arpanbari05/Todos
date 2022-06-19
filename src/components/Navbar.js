import React from "react";
import { NavLink } from "react-router-dom";
import "styled-components/macro";

const NavLinks = [
  {
    label: "All todos",
    to: "/home",
  },
  {
    label: "Today",
    to: "today",
  },
  {
    label: "Archives",
    to: "archives",
  },
  {
    label: "Pending",
    to: "pending",
  },
];

function Navbar() {
  return (
    <nav
      className="flex items-start justify-center p-8"
      css={`
        border-right: 1px solid #eee;
        min-height: calc(100vh - 70px);
      `}
    >
      <div className="grid w-full">
        {NavLinks.map((nav) => (
          <NavLink
            className="w-full px-4 py-3 mb-3 rounded-xl"
            activeClassName="bg-primary_shade text-primary"
            to={nav.to}
          >
            {nav.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
