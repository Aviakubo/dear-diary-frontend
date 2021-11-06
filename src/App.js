import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidebar from  './components/Sidebar'

function App() {
  return (
    <>
     <Router>
       <Sidebar />
       <Routes>
       <Route path='/'/>
       </Routes>
     </Router>
      
    </>
  );
}

export default App;
