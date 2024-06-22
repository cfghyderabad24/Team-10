import "flowbite/dist/flowbite.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/SignIn";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
