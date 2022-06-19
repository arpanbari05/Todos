import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import "styled-components/macro";
import { Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to="/home" />
        </Route>
        <Route path={"/home"}>
          <Home></Home>
        </Route>
        <Route path={"/pending"}>
          <Home></Home>
        </Route>
        <Route path={"/today"}>
          <Home></Home>
        </Route>
        <Route path={"/archives"}>
          <Home></Home>
        </Route>
        <Route path={"/auth/login"}>
          <AuthPage />
        </Route>
        <Route path={"/auth/signup"}>
          <AuthPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
