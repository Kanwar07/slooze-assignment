import { useContext } from "react";
import InventoryOverview from "../components/dashboard/InventoryOverview";
import ItemsSoldAnalytics from "../components/dashboard/ItemsSoldAnalytics";
import PaymentInfo from "../components/dashboard/PaymentInfo";
import Search from "../components/dashboard/Search";
import ShipmentAnalytics from "../components/dashboard/ShipmentAnalytics";
import UserInfo from "../components/dashboard/UserInfo";
import { ContextData } from "../context/Context";

function DashBoard() {
  const { toggleColor } = useContext(ContextData);

  return (
    <>
      {toggleColor ? (
        <div className="bg-[#000000] h-full w-screen pl-24 max-sm:pl-0 pb-4">
          <Search />
          <UserInfo />
          <hr className="bg-[#e5e5e5] h-[1px] border-0" />
          <PaymentInfo />
          <div className="flex flex-row gap-4 w-fit max-xl:flex-col">
            <InventoryOverview />
            <ShipmentAnalytics />
          </div>
          <ItemsSoldAnalytics />
        </div>
      ) : (
        <div className="bg-[#f7f9fb] h-full w-screen pl-24 max-sm:pl-0 pb-4">
          <Search />
          <UserInfo />
          <hr className="bg-[#e5e5e5] h-[1px] border-0" />
          <PaymentInfo />
          <div className="flex flex-row gap-4 w-fit max-xl:flex-col">
            <InventoryOverview />
            <ShipmentAnalytics />
          </div>
          <ItemsSoldAnalytics />
        </div>
      )}
    </>
  );
}

export default DashBoard;
