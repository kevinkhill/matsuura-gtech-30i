/* eslint-disable react/no-array-index-key */
import React from "react";

const MenuButton = ({ item }) => (
  <div
    key={item}
    className="flex flex-col items-center w-8 grow raised-button-edge outline-1-black"
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

  menuItems.forEach((item, index) => {
    if (item) {
      console.log("Registering", item, "as", `MI_${index + 1}`);
    }
  });

  return (
    <div className="bg-gray-400">
      <div className="flex gap-2 p-1 text-sm text-blue-800 font-lcd">
        <div className="flex flex-row flex-grow">
          <ArrowButton arrow="<" />
          {leftItems.map((item, index) => (
            <MenuButton item={item} key={`L${index}_${item}`} />
          ))}
        </div>
        <div className="flex flex-row flex-grow">
          {rightItems.map((item, index) => (
            <MenuButton item={item} key={`L${index}_${item}`} />
          ))}
          <ArrowButton arrow=">" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
