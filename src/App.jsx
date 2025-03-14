import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Login from "./Component/Login";
import Section from "./Component/Section";
import { useState } from "react";

function App() {

  const[credentialData, setCredentialData] = useState(false)

  const storedEmail = localStorage.getItem("Email") ;
  const storedPassword = localStorage.getItem("Password") 

  if(storedEmail && storedPassword){
    setCredentialData(true)
  }

  return (  
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          {credentialData && <Route path="/landing" element={<Section/>} />}
        </Routes>
      </Router>
    </>
  );  
}

export default App;
