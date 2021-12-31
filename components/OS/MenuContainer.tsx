import React from "react";

import MenuBar from "./MenuBar";
import TopBar from "./TopBar";

const MenuContainer = ({ content, curentMode, title, path, menuItems }) => {
  return (
    <div className="flex flex-col text-black bg-gray-300 font-lcd grow">
      <TopBar mode={curentMode} title={title} path={path} />
      {content}
      <MenuBar menuItems={menuItems} />
    </div>
  );
};

export default MenuContainer;
