import search from "../../assets/search.svg";
import menutip from "../../assets/menutip.svg";
import logo from "../../assets/logo.svg";
import calender from "../../assets/calender.svg";
import notification from "../../assets/notification.svg";
import settingssearch from "../../assets/settingssearch.svg";
import user from "../../assets/user.svg";
import { useContext, useState } from "react";
import SideBarMobile from "../SideBarMobile";
import { ContextData } from "../../context/Context";

function Search() {
  const [menubar, setmenubar] = useState(false);

  const {
    toggleColor,
    setToggleColor,
    colors,
    setSelectdColor,
    selectedColor,
  } = useContext(ContextData);

  const handlecolor = (e) => {
    setSelectdColor(e.target.value);
  };

  return (
    <>
      <div
        className="py-6 px-10 flex flex-row gap-4 max-md:items-start max-md:flex-col items-center w-full justify-between"
        style={{ backgroundColor: selectedColor }}
      >
        <div className="flex flex-row gap-4">
          <div className="relative group max-sm:hidden">
            <img src={menutip} alt="menutip" className="cursor-pointer" />
            <span className="z-100 absolute left-1/2 top-full mb-2 w-max -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Click on logo to open Menu
            </span>
          </div>

          <img
            src={logo}
            alt="logo"
            className="cursor-pointer hidden max-sm:block"
            onClick={() => setmenubar(!menubar)}
          />

          <div
            className="w-fit flex flex-row gap-2 items-center px-3 py-1 rounded-[10px]"
            style={{
              backgroundColor: selectedColor,
              filter: "brightness(50%)",
            }}
          >
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search"
              className="placeholder:text-[#ffffff] outline-none focus:ring-0 focus:border-transparent text-[#ffffff]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="text-[#ffffff] text-[14px]">Select Theme</span>
          <select
            className="text-[#ffffff] border-2 border-[#e5e5e5] px-3 py-1 rounded-[10px] text-[14px] font-semibold"
            onChange={(e) => handlecolor(e)}
          >
            {colors.map((color) => {
              const { id, name, hexCode } = color;
              return (
                <option
                  key={id}
                  value={hexCode}
                  style={{ backgroundColor: selectedColor }}
                >
                  {name} ({hexCode})
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-row items-center gap-2 px-1 py-1 border-2 border-[#e5e5e5] rounded-full h-fit w-fit cursor-pointer">
          <span
            className={`px-3 py-1 rounded-full text-[12px] ${
              toggleColor
                ? "text-[#000000] bg-[#ffffff] "
                : "text-[#ffffff] bg-transparent"
            }`}
            onClick={() => setToggleColor(true)}
          >
            Dark
          </span>
          <span
            className={`px-3 py-1 rounded-full text-[12px] ${
              toggleColor
                ? "text-[#ffffff] bg-transparent"
                : "text-[#000000] bg-[#ffffff] "
            }`}
            onClick={() => setToggleColor(false)}
          >
            Light
          </span>
        </div>
        <div className="flex flex-row items-center gap-4 max-md:hidden">
          <img
            src={calender}
            alt="calender"
            className="size-7 cursor-pointer"
          />
          <img
            src={notification}
            alt="notification"
            className="size-7 cursor-pointer"
          />
          <img
            src={settingssearch}
            alt="settingssearch"
            className="size-7 cursor-pointer"
          />
          <div
            className="px-4 py-2 rounded-[10px] flex flex-row gap-4 items-center cursor-pointer"
            style={{
              backgroundColor: selectedColor,
              border: "2px solid #e5e5e5",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex flex-col text-[#ffffff] text-[16px]">
              <span className="text-[14px]">rohan@etls.xyz</span>
              <span className="font-bold">ETLS PVT. LTD.</span>
            </div>
            <img src={user} alt="user" className="size-8" />
          </div>
        </div>
      </div>
      {menubar ? <SideBarMobile {...{ menubar, setmenubar }} /> : null}
    </>
  );
}

export default Search;
