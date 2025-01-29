import userlogo from "../../assets/userlogo.svg";

function UserInfo() {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-4">
      <div className="flex flex-row gap-8 items-start">
        <div className="flex flex-row gap-4 items-center">
          <img src={userlogo} alt="userlogo" />
          <div className="flex flex-col text-[18px] font-semibold">
            <span>Hello, Rahul</span>
            <span className="text-[12px] text-[#7c7d7e]">ORUE PVT. LTD.</span>
          </div>
        </div>
        <button className="bg-[#4f45e4] text-[12px] text-[#ffffff] px-3 py-1 rounded-[10px] cursor-pointer">
          CUSTOMER
        </button>
      </div>
      <select className="text-[#7c7d7e] border-2 border-[#e5e5e5] px-4 py-2 rounded-[10px] text-[14px] font-semibold">
        <option>LAST 30 DAYS</option>
        <option>LAST 60 DAYS</option>
        <option>LAST 90 DAYS</option>
      </select>
    </div>
  );
}

export default UserInfo;
