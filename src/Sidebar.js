import propsexample from "./pages/props";
import conditionalrender from "./pages/conditionalrender";
import RoutingExample from "./pages/routing";
import BasicHooksPage from "./pages/Hooks/Basicpage";
const Sidebardata = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Props",
    path: "/props",
    component: propsexample,
  },

  {
    title: "Condionalrender",
    path: "/Condionalrender",
    component: conditionalrender,
  },

  {
    title: "Router",
    path: "/routing",
    component: RoutingExample,
  },

  {
    title: "Basic Hooks",

    path: "/basichooks",

    component: BasicHooksPage,
  },
];

export default Sidebardata;
