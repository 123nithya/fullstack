import {Routes,Route,Navigate} from "react-router-dom";
import { lazy } from "react";
import LazyLayout from "./components/LazyLayout";
import UserLayout from "./pages/user/UserLayout"
import AdminLayout from "./pages/admin/AdminLayout"

//user
const LazyLogin = lazy(() => import ("./pages/auth/Login"))
const LazySignup = lazy(() => import ("./pages/auth/Signup"))
const LazyHome = lazy(() => import ("./pages/user/Home"))
const LazyAbout = lazy(() => import ("./pages/user/About"))
const LazyProfile = lazy(() => import ("./pages/user/Profile"))
const LazyAcademy= lazy(() => import ("./pages/user/Academy"))
const LazyCourse = lazy(() => import ("./pages/user/Course"))
const LazyRules = lazy(() => import ("./pages/user/Rules"))




//admin
const LazyDashboard = lazy(() => import("./pages/admin/DashBoard"))
const lazyAdminAcademy = lazy(() => import("./pages/admin/Institute"))
const lazyAdminCourse = lazy(() => import("./pages/admin/Courses"))
const lazyAdminLearner = lazy(() => import("./pages/admin/Learner"))
 
const UserRoutes = () =>{
  return (
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyHome}/>} />
      <Route path="/academy" element={<LazyLayout component={LazyAcademy}/>} />
      <Route
          path="/academy/:id"
          element={<LazyLayout component={LazyCourse} />}
        />
        {/* <Route
          path="/academy/:id/course/:id"
          element={<LazyLayout component={lazyEnroll} />}
        /> */}
      <Route path="/profile" element={<LazyLayout component={LazyProfile}/>} />
      <Route path="/about" element={<LazyLayout component={LazyAbout}/>} />
      <Route path="/rules" element={<LazyLayout component={LazyRules}/>} />
    </Routes>
    </UserLayout>
  )
}

const AdminRoutes = () =>{
  return(
    <AdminLayout>
    <Routes>
      <Route path="/dashboard" element={<LazyLayout component={LazyDashboard } />}></Route>
      <Route
          path="/academy"
          element={<LazyLayout component={lazyAdminAcademy} />}
        />
        <Route  
          path="/course"
          element={<LazyLayout component={lazyAdminCourse} />}
        />
        <Route  
          path="/learner"
          element={<LazyLayout component={lazyAdminLearner} />}
        />
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
