import './App.css';
import {HashRouter, Routes, Navigate, Route, Outlet} from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Login from "./Pages/LoginPage"
import Dashboard from "./Pages/DashboardPage"
import Pilih from "./Pages/PilihPages"
import Profile from "./Pages/ProfilePage"
import Result from "./Pages/ResultPage"
import Change from "./Pages/CzangePage"
import {HasilPage} from "./Pages/HasilPage";
import UserMan from "./Pages/UserManagementPage"
import Prolink from "./Pages/Component/Prolink"
import {getAccessToken,getUserToken} from "./utils/auth";
import Logout from "./Pages/logout";

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          {/*<Route element={<ProtectedRoute />}>*/}
              <Route exact path = "/dashboard" element={<Dashboard/>}/>
              <Route exact path = "/pilih" element={<Pilih/>}/>
              <Route exact path = "/profile" element  = {<Profile/>}/>
              <Route exact path = "/result" element  = {<Result/>}/>
              <Route exact path = "/logout" element = {<Logout/>}/>
          {/*</Route>*/}
          <Route element={<AdminRoute/>}>
              <Route exact path = "/change" element={<Change/>}/>
              <Route exact path = "/hasil" element={<HasilPage/>}/>
          </Route>
      </Routes>
    </HashRouter>
  );
}
const ProtectedRoute = ({ redirectPath = '/' }) => {
    if (getAccessToken() === null) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};
const AdminRoute = ({ redirectPath = '/' }) => {
    if (getUserToken() !== "fahrul") {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
export default App;
