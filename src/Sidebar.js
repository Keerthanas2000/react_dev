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
  }
];

export default Sidebardata;
