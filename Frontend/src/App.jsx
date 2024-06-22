import "flowbite/dist/flowbite.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/SignIn";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Check } from "./Components/check";
import { ProjectDetails } from "./Components/ProjectDetails";
import Home_Org from "./Components/Home_Org"
import Header from "./Components/Header"
import ProjectDetails2 from "./Components/ProjectDetails2"
import Home_RM from "./Components/Home_RM"
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
          <Route path="/homeRM" element={<Home_RM />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
