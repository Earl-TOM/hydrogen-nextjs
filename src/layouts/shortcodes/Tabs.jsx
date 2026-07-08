"use client";

import { useState } from "react";
import React from "react";

function Tabs({ children }) {
  const [active, setActive] = useState(0);
  const tabItems = React.Children.toArray(children);

  return (
    <div className="relative">
      <ul className="mb-0 flex list-none items-center space-x-4 pl-0">
        {tabItems.map((item, index) => (
          <li
            key={index}
            className={`m-0 cursor-pointer rounded px-8 py-3 text-text ${
              index === active ? "active-tab" : ""
            }`}
            onClick={() => setActive(index)}
          >
            {item.props.name}
          </li>
        ))}
      </ul>
      <ul className="mt-1 mb-0 list-none rounded bg-[#242e38] p-6">
        {tabItems.map((item, index) => (
          <li
            key={index}
            className={`tab-item my-0 ${index === active ? "" : "hidden"}`}
          >
            {item.props.children}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
