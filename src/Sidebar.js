import propsexample from "./pages/props";
import conditionalrender from "./pages/conditionalrender";
import RoutingExample from "./pages/routing";
import BasicHooksPage from "./pages/Hooks/Basicpage";
import UsestateExample from "./pages/Hooks/ALLHOOKS/usestate";
import UseeffectFunc from "./pages/Hooks/ALLHOOKS/useeffect";
import UseContextfunc from "./pages/Hooks/ALLHOOKS/usecontext";

import Usereducerfunc from "./pages/Hooks/ALLHOOKS/usereducer";
import UseReffunc from "./pages/Hooks/ALLHOOKS/useref";
import Usecallbackfunc from "./pages/Hooks/ALLHOOKS/usecallback";

import UseMemofunc from "./pages/Hooks/ALLHOOKS/usememo";

import CounterComponent from "./pages/Hooks/ALLHOOKS/customcomponent";

import Lcycleclass from "./pages/Reactlifecycle";

import React9 from "./pages/Hooks/statefullandstateless/basicpage";
import HOCFUNC from "./pages/HOC/basicpage";

import ReduxApp from "./pages/Redux/ReduxApp";
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

  {
    title: "Usestate Example",

    path: "/usestateexample",

    component: UsestateExample,
  },

  {
    title: "Useeffect Example",

    path: "/UseeffectFunc",

    component: UseeffectFunc,
  },

  {
    title: "UseContext Example",

    path: "/usecontextfunc",

    component: UseContextfunc,
  },


  
  {
    title: "Use reducer Example",

    path: "/usereducerfunc",

    component: Usereducerfunc,
  },


  {
    title: "Use ref Example",

    path: "/useref",

    component: UseReffunc,
  },


  {
    title: "Use Callback Example",

    path: "/usecallback",

    component: Usecallbackfunc,
  }
  ,{
    title: "Usememo Example",

    path: "/usememo",

    component: UseMemofunc,
  }
  


  ,{
    title: "Custom hook",

    path: "/customhook",

    component: CounterComponent,
  },


  
  {
    title: "Lifecycle class",

    path: "/lifecycleclass",

    component: Lcycleclass,
  },


  {
    title: "Statefull and Stateless",

    path: "/userpage",

    component: React9,
  },
  {
    title: "HOC FUNC",

    path: "/hoc",

    component: HOCFUNC,
  },

  {
    title: "ReduxApp",

    path: "/ReduxApp",

    component: ReduxApp,
  }
];

export default Sidebardata;
