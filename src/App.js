import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Sidebardata from "./Sidebar";
import Propsexample from "./pages/props";

function App() {
  let Userpath = "";
  return (
    <div className="App">
      <div className="sidebar-container">
        <ul className="nav-list">
          {Sidebardata.map((i, index) => {
            Userpath = i.path;
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={Userpath}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>{i.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Welcome to React Dashboard</h1>} />
          <Route path={Userpath} element={<Propsexample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
