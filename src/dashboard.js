import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <h1>Welcome to React Dashboard</h1>
      <div>
        <h2>Or use these links</h2>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/props">Props</Link></li>
            <li><Link to="/Condionalrender">Conditional render</Link></li>
          </ul>
        </nav>
      </div>

      {/* Outlet renders the nested child route's content */}
      <Outlet />
    </>
  );
};

export default DashboardLayout;
