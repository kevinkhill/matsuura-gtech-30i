import React, { createContext, useContext } from "react";

const initialContext = {
  menuItems: [],
  loadMenu: (items: string[]) => {
    initialContext.menuItems = [""].concat(items);
  },
  callMenuItem: (group: "main" | "aux", index: number) => {
    alert(
      `calling ${group} ${index} from SoftKeyContext. menuItems[${index}] = ${initialContext.menuItems[index]}`
    );
  }
};

const SoftKeyContext = createContext(initialContext);

export function useSoftKeyContext() {
  const context = useContext(SoftKeyContext);
  if (context === undefined) {
    throw new Error(
      "useSoftKeyContext must be used within a SoftKeyContextProvider"
    );
  }
  return context;
}

export default SoftKeyContext;
