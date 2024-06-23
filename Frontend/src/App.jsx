import "flowbite/dist/flowbite.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/SignIn";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Check } from "./components/check";
import Home_Org from "./components/Home_Org"
// import Header from "./components/Header"
import ProjectDetails2 from "./components/ProjectDetails2"
import Home_RM from "./components/Home_RM"
import { Profile } from "./components/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/signin" element={<Signin />} />
          {/* <ProtectedRoute path="/" exact /> */}
          {/* <Route path="/" element={<Check />} /> */}
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/project/:projectId" element={<ProjectDetails2 />} />
          <Route path="/homeNgo" element={<Home_Org />} />
          {/* <Route path="/homeRM" element={<Home_RM />} /> */}
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
