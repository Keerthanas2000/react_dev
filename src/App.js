import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Sidebardata from "./Sidebar";
import Propsexample from "./pages/props";

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <ul className="nav-list">
          {Sidebardata.map((i, index) => (
            <li className="nav-item" key={index}>
              <NavLink to={i.path} className={({ isActive }) => (isActive ? "active" : "")}>
                <span>{i.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/props" element={<Propsexample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
