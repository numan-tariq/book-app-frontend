import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Books from "./pages/Books";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import AutherBooks from "./pages/AutherBooks";
import "antd/dist/antd.css";
import Protected from "../src/components/Protected";
import EditBook from "../src/components/EditBook";
import DeleteBook from "../src/components/DeleteBook";
import { connect } from "react-redux";
import { userLogin, userLogout, userFullName } from "./store/actions/dataAction";

function App({userLogin, userLogout, userFullName}) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userLogin();
      userFullName(JSON.parse(localStorage.getItem('user'))?.firstName);
    } else {
      userLogout();
    }
  }, []);

  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/books" exact>
          <Books />
        </Route>
        <Route path="/user" exact>
          <Protected components={User} />
        </Route>
        <Route path="/auther-book" exact>
          <Protected components={AutherBooks} />
        </Route>
        <Route path="/edit-book" exact>
          <Protected components={EditBook} />
        </Route>
        <Route path="/delete-book" exact>
          <Protected components={DeleteBook} />
        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, {userLogin, userLogout, userFullName})(App);
