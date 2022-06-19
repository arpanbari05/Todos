import React from "react";
import { Redirect } from "react-router-dom";

function Home() {
  const isAuthenticated = localStorage.getItem("token");
  if (isAuthenticated) return <Redirect to="/auth/login" />;
  return <div>home</div>;
}

export default Home;
