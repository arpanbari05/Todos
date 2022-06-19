import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import "styled-components/macro";
import TopHeader from "../components/TopHeader";

function Home({ children }) {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) return <Redirect to="/auth/login" />;

  return (
    <div>
      <TopHeader />
      <div
        className="grid"
        css={`
          grid-template-columns: 300px 1fr;
        `}
      >
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Home;
