import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Login from "./Component/Login";
import Section from "./Component/Section";
import { useState } from "react";

function App() {

  const[credentialData, setCredentialData] = useState(false)


  function loginPage(check){
    setCredentialData(check)
  }

  return (  
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login  loginpagef={loginPage}/>} />
          {credentialData && <Route path="/landing" element={<Section/>} />}
        </Routes>
      </Router>
    </>
  );  
}

export default App;
