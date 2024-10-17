"use client";

import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    key: "2",
    label: "Industries",
    children: [
      {
        key: "2-1",
        label: <Link href="/coming-soon">Healthcare</Link>, // Redirects to coming-soon
      },
    ],
  },
  {
    key: "3",
    label: "Service",
    children: [
      {
        key: "3-1",
        label: <Link href="/coming-soon">Staff Augmentation</Link>, // Redirects to coming-soon
      },
      {
        key: "3-2",
        label: <Link href="/coming-soon">Technology Consulting</Link>, // Redirects to coming-soon
      },
      {
        key: "3-3",
        label: <Link href="/coming-soon">Data & Analytics</Link>, // Redirects to coming-soon
      },
    ],
  },
];

const items2 = [
  {
    key: "1",
    label: <Link href="/coming-soon">About us</Link>, // Redirects to coming-soon
  },
  {
    key: "2",
    label: <Link href="/coming-soon">Our Team</Link>, // Redirects to coming-soon
  },
  {
    key: "3",
    label: <Link href="/coming-soon">Events & Publications</Link>, // Redirects to coming-soon
  },
];

const items3 = [
  {
    key: "1",
    label: <Link href="/coming-soon">Digital Insights</Link>, // Redirects to coming-soon
  },
];

export default function Navbar() {
  return (
    <div className="navbar-container w-[100vw] flex justify-between items-center p-4 ">
      <Link href="/" className="navbar-brand text-white">
        <Image
          src="/logo-light.png"
          alt="hero"
          objectFit="cover" // Ensures the image covers the container proportionally
          className="z-10" // Ensure the image has a lower z-index than the text and navbar
          height={50} // Adjust height for the navbar
          width={150} // Adjust width for the navbar
        />
      </Link>
      <div className="navbar-links flex items-center space-x-4">
        <Dropdown
          menu={{ items }}
          trigger={["hover"]}
          overlayClassName="navbar-dropdown"
          placement="bottomLeft"
        >
          <a onClick={(e) => e.preventDefault()} className="navbar-link text-white">
            <Space>
              What we do <DownOutlined className="text-[14px]" />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{ items: items2 }}
          trigger={["hover"]}
          overlayClassName="navbar-dropdown"
          placement="bottomLeft"
        >
          <a onClick={(e) => e.preventDefault()} className="navbar-link text-white">
            <Space>
              Who we are <DownOutlined className="text-[14px]" />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{ items: items3 }}
          trigger={["hover"]}
          overlayClassName="navbar-dropdown"
          placement="bottomRight"
        >
          <a onClick={(e) => e.preventDefault()} className="navbar-link text-white">
            <Space>
              Insights <DownOutlined className="text-[14px]" />
            </Space>
          </a>
        </Dropdown>

        <Link href="/coming-soon">
          <div className="px-4 py-2 rounded-[10px] text-black font-bold bg-white cursor-pointer">Contact us</div>
        </Link>
      </div>
    </div>
  );
}
