import { createContext } from "react";

const PanelButtonsCtx = createContext({
  selectedInc: "X1",
  addCity: (name, temperature) => { },
});


export default PanelButtonsCtx;
