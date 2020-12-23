import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";
import "./default.scss";
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Registration from "./pages/Registration";
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";
import Dashboard from "./pages/Dashboard";
import AdminToolbar from "./components/AdminToolbar";
import Admin from "./pages/Admin";
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Search from "./pages/Search";
const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="app">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
