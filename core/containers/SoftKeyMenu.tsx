import React, { useState } from "react";
import { createContainer } from "unstated-next";

function useSoftKeyMenu(initialState = []) {
  const [menuItems, setMenuItems] = useState(initialState);

  const addMenuItem = item =>
    setMenuItems(prev => {
      prev.push(item);
      return prev;
    });

  const callIndex = (index: any) => {
    console.log("FROM CONTAINER", index);
  };

  return { menuItems, callIndex, setMenuItems, addMenuItem };
}

const SoftKeyMenu = createContainer(useSoftKeyMenu);

export default SoftKeyMenu;
