import InventoryOverview from "../components/dashboard/InventoryOverview";
import ItemsSoldAnalytics from "../components/dashboard/ItemsSoldAnalytics";
import PaymentInfo from "../components/dashboard/PaymentInfo";
import Search from "../components/dashboard/Search";
import ShipmentAnalytics from "../components/dashboard/ShipmentAnalytics";
import UserInfo from "../components/dashboard/UserInfo";

function DashBoard() {
  return (
    <div className="bg-[#f7f9fb] h-full w-screen pl-24 pb-4">
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
  );
}

export default DashBoard;
