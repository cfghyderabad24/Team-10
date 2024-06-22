import "flowbite/dist/flowbite.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/SignIn";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Check } from "./components/check";
import { ProjectDetails } from "./components/ProjectDetails";
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
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
