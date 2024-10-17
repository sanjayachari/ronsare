"use client";

import { Dropdown, Space } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import './navbar.css'; // Import custom CSS

const items = [
  {
    key: "1",
    type: "group",
    label: "Group title",
    children: [
      {
        key: "1-1",
        label: "1st menu item",
      },
      {
        key: "1-2",
        label: "2nd menu item",
      },
    ],
  },
  {
    key: "2",
    label: "Submenu",
    children: [
      {
        key: "2-1",
        label: "3rd menu item",
      },
      {
        key: "2-2",
        label: "4th menu item",
        children: [
          {
            key: "2-2-1",
            label: "5th menu item",
          },
          {
            key: "2-2-2",
            label: "6th menu item",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    label: "Disabled submenu",
    // disabled: true,
    children: [
      {
        key: "3-1",
        label: "5th menu item",
      },
      {
        key: "3-2",
        label: "6th menu item",
      },
    ],
  },
];
const Navbar2 = () => {
  return (
    <div className="h-[500px] w-full border-2 border-black"></div>
)
}

export default Navbar2