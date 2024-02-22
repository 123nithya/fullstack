import {Routes,Route,Navigate} from "react-router-dom";
import { lazy } from "react";
import LazyLayout from "./components/LazyLayout";
import UserLayout from "./pages/user/UserLayout"
import AdminLayout from "./pages/admin/AdminLayout"
const LazyLogin = lazy(() => import ("./pages/auth/Login"))
const LazySignup = lazy(() => import ("./pages/auth/Signup"))
const LazyHome = lazy(() => import ("./pages/user/Home"))
const LazyAbout = lazy(() => import ("./pages/user/About"))
const LazyProfile = lazy(() => import ("./pages/user/Profile"))
const LazyDashboard = lazy(() => import("./pages/admin/DashBoard"))

const UserRoutes = () =>{
  return (
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyHome}/>} />
      <Route path="/profile" element={<LazyLayout component={LazyProfile}/>} />
      <Route path="/about" element={<LazyLayout component={LazyAbout}/>} />
    </Routes>
    </UserLayout>
  )
}

const AdminRoutes = () =>{
  return(
    <AdminLayout>
    <Routes>
      <Route path="/dashboard" element={<LazyLayout component={LazyDashboard } />}></Route>
    </Routes>
    </AdminLayout>
  )
}

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Navigate to="/my-project/Login" />} />
        <Route path="/my-project/Login" element={<LazyLayout component={LazyLogin} />} />
        <Route path="/my-project/Signup" element={<LazyLayout component={LazySignup} />} />
        <Route path="/my-project/user/*" element={<UserRoutes />}/>
        <Route path="/my-project/admin/*" element={<AdminRoutes />}/>
    </Routes>
  )
}


export default App
