import { BrowserRouter, Switch } from "react-router-dom";
import "styled-components/macro";
import { Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { useToggle } from "./customHooks";

function App() {
  const navbar = useToggle(false);

  return (
    <BrowserRouter>
      <Switch>
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
