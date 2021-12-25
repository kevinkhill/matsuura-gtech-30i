import React from "react";

const MenuButton = item => (
  <div
    key={item}
    className="flex flex-col items-center grow raised-button-edge outline-1-black"
  >
    <div className="h-8 grow">
      <div> </div>
    </div>
    <div className="shrink">{item}</div>
  </div>
);

const ArrowButton = ({ arrow }: { arrow: string }) => (
  <div className="flex px-2 shrink raised-button-edge outline-1-black">
    <span className="self-center text-gray-300 align-middle bg-blue-800">
      {arrow}
    </span>
  </div>
);

const MenuBar = ({ menuItems = [] }) => {
  const leftItems = menuItems.slice(0, 5);
  const rightItems = menuItems.slice(5, 11);

  return (
    <div className="bg-gray-300">
      <div className="flex gap-2 p-1 text-sm text-blue-800 font-lcd">
        <div className="flex flex-row grow">
          <ArrowButton arrow="<" />
          {leftItems.map(MenuButton)}
        </div>
        <div className="flex flex-row grow">
          {rightItems.map(MenuButton)}
          <ArrowButton arrow=">" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
