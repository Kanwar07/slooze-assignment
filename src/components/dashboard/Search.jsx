import search from "../../assets/search.svg";
import menutip from "../../assets/menutip.svg";
import calender from "../../assets/calender.svg";
import notification from "../../assets/notification.svg";
import settingssearch from "../../assets/settingssearch.svg";
import user from "../../assets/user.svg";

function Search() {
  return (
    <div className="bg-[#4F45E4] py-6 px-10 flex flex-row items-center w-full justify-between">
      <div className="flex flex-row gap-4">
        <div className="relative group">
          <img src={menutip} alt="menutip" className="cursor-pointer" />
          <span className="z-100 absolute left-1/2 top-full mb-2 w-max -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            Click on logo to open Menu
          </span>
        </div>

        <div className="w-fit flex flex-row gap-2 items-center px-3 py-1 bg-[#3830b7] rounded-[10px]">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-[#ffffff] outline-none focus:ring-0 focus:border-transparent text-[#ffffff]"
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 max-md:hidden">
        <img src={calender} alt="calender" className="size-7 cursor-pointer" />
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
        <div className="px-4 py-2 bg-[#3830B7] rounded-[10px] flex flex-row gap-4 items-center cursor-pointer">
          <div className="flex flex-col text-[#ffffff] text-[16px]">
            <span className="text-[14px]">rohan@etls.xyz</span>
            <span className="font-bold">ETLS PVT. LTD.</span>
          </div>
          <img src={user} alt="user" className="size-8" />
        </div>
      </div>
    </div>
  );
}

export default Search;
