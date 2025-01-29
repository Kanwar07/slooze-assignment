import { useState } from "react";
import logo from "../assets/logo.svg";
import menuicon1 from "../assets/menuicon1.svg";
import menuicon2 from "../assets/menuicon2.svg";
import menuicon3 from "../assets/menuicon3.svg";
import menuicon4 from "../assets/menuicon4.svg";
import menuicon5 from "../assets/menuicon5.svg";
import menuicon6 from "../assets/menuicon6.svg";
import menuicon7 from "../assets/menuicon7.svg";
import menuicon8 from "../assets/menuicon8.svg";
import menuicon9 from "../assets/menuicon9.svg";
import help from "../assets/help.svg";
import settings from "../assets/settings.svg";

function Sidebar() {
  const [open, setopen] = useState(false);
  const menus = [
    { name: "3D Model", icon: menuicon1 },
    { name: "User Profile", icon: menuicon2 },
    { name: "Documentst", icon: menuicon3 },
    { name: "Network", icon: menuicon4 },
    { name: "Database", icon: menuicon5 },
    { name: "Analytics", icon: menuicon6 },
    { name: "Reports", icon: menuicon7 },
    { name: "Shopping", icon: menuicon8 },
    { name: "Code Development", icon: menuicon9 },
  ];
  return (
    <div
      className={`fixed bg-[#ffffff] h-full flex flex-col justify-between ${
        open ? "w-60" : "w-24"
      } duration-500 absolute z-10`}
    >
      <div>
        <div
          className={`flex py-4 ${
            open ? "justify-end pr-4" : "justify-center"
          }`}
        >
          <img
            src={logo}
            alt="logo"
            className="size-14 cursor-pointer"
            onClick={() => setopen(!open)}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          {menus?.map((menu, index) => (
            <div key={index}>
              <div
                className={`flex items-center flex-row gap-2  ${
                  open ? "bg-transparent px-4" : "justify-center"
                }`}
              >
                <img
                  src={menu?.icon}
                  alt={menu?.name}
                  className="size-12 py-2 size-12 cursor-pointer"
                />
                {open ? (
                  <div className="font-ubuntu font-medium text-[14px] cursor-pointer">
                    {menu?.name}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-col ${
          open ? "items-start ml-6" : "items-center"
        } gap-4 mb-4`}
      >
        <img src={help} alt="help" className="size-10 cursor-pointer" />
        <div className="w-full border-t border-gray-300"></div>
        <img src={settings} alt="settings" className="size-14 cursor-pointer" />
      </div>
    </div>
  );
}

export default Sidebar;
