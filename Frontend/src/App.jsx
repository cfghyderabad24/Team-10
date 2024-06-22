import Home_Org from "./Components/Home_Org"
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import ProjectDetails from "./Components/ProjectDetails"
import Home_RM from "./Components/Home_RM"

function App() {

  return (
    <>
      <BrowserRouter>git
        < Routes>
          <Route path="/homeNgo" element={<Home_Org/>}/>
          <Route path="/project/:projectId" element={<ProjectDetails/>}/>
          <Route path="/homeRM" element={<Home_RM/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
