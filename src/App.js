import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import "styled-components/macro";
import { Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import { AllTodos, Today, Archives } from "./components/Sections";
import Users from "./components/Users";
import Reports from "./components/Reports";
import AdminTodos from "./components/AdminTodos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to="/home" />
        </Route>
        <Route path={"/home"}>
          <Home>
            <AllTodos />
          </Home>
        </Route>
        <Route path={"/today"}>
          <Home>
            <Today />
          </Home>
        </Route>
        <Route path={"/archives"}>
          <Home>
            <Archives />
          </Home>
        </Route>
        <Route path={"/users"}>
          <Home>
            <Users />
          </Home>
        </Route>
        <Route path={"/todos"}>
          <Home>
            <AdminTodos />
          </Home>
        </Route>
        <Route path={"/reports"}>
          <Home>
            <Reports />
          </Home>
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
