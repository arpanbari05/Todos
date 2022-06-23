import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "styled-components/macro";
import { MatButton } from ".";
import { useGetNavLinks } from "../customHooks";

function Navbar() {
  const { navLinks } = useGetNavLinks();

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.replace("/auth/login");
  };
  return (
    <nav
      className="flex items-start justify-center p-8 sticky top-[70px] left-0"
      css={`
        border-right: 1px solid #eee;
        min-height: calc(100vh - 70px);
      `}
    >
      <div className="grid w-full">
        {navLinks?.map((nav) => (
          <NavLink
            className="w-full px-4 py-3 mb-3 rounded-xl"
            activeClassName="bg-primary_shade text-primary"
            to={nav.to}
          >
            {nav.label}
          </NavLink>
        ))}
        <MatButton
          onClick={handleLogout}
          variant="secondary"
          color="error"
          className="bg-red-100 text-red-500 mt-10"
        >
          Log out
        </MatButton>
      </div>
    </nav>
  );
}

export default Navbar;
