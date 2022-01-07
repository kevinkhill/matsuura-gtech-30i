import { createContext } from "react";

const MonitorContext = createContext({
  menuItems: [],
  callMenuItem: () => {}
});

export default MonitorContext;
