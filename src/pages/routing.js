// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import root from '..';

// function routing() {
//   return (
// <>
// <h1> Routing example</h1>

// <BrowserRouter>
// <Routes>
   
   
   
//    <Route  path='/routing' element=
//    {root} 
   
   
//    />

//    <Routes/></Routes>
   
//    </BrowserRouter>
// </>  )
// }

// export default routing


// You're doing two things that are not allowed:

// You're rendering a second <BrowserRouter> inside routing.js — but your app already has one at the top level (in index.js). This causes the error:

// "You cannot render a <Router> inside another <Router>."


import React from "react";
import { useNavigate } from "react-router-dom";

function RoutingExample() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Routing Example Page</h1>
      <button onClick={() => navigate("/")}>Go to Dashboard</button>
    </div>
  );
}

export default RoutingExample;
