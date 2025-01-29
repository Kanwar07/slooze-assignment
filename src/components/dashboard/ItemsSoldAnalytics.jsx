import { useState } from "react";
import worldmap from "../../assets/worldmap.svg";

function ItemsSoldAnalytics() {
  const [clientsupplier, setclientsupplier] = useState(false);
  const [itemsoldmode, setitemsoldmode] = useState(false);
  const [itempurchasemode, setitempurchasemode] = useState(false);

  const clientSuplier = [
    {
      id: 1,
      name: "Amit Sethi",
      unitsPrice: "₹184,392",
      winloss: "57% Win/Loss",
      orders: "163 Orders",
    },
    {
      id: 2,
      name: "John Doe",
      unitsPrice: "₹283,207",
      winloss: "82% Win/Loss",
      orders: "154 Orders",
    },
    {
      id: 3,
      name: "Sara Lee",
      unitsPrice: "₹195,639",
      winloss: "63% Win/Loss",
      orders: "180 Orders",
    },
    {
      id: 4,
      name: "Michael Clark",
      unitsPrice: "₹325,431",
      winloss: "45% Win/Loss",
      orders: "102 Orders",
    },
    {
      id: 5,
      name: "Amit Sethi",
      unitsPrice: "₹405,000",
      winloss: "87% Win/Loss",
      orders: "192 Orders",
    },
    {
      id: 6,
      name: "Jane Smith",
      unitsPrice: "₹100,750",
      winloss: "50% Win/Loss",
      orders: "110 Orders",
    },
    {
      id: 7,
      name: "David Kumar",
      unitsPrice: "₹220,500",
      winloss: "72% Win/Loss",
      orders: "135 Orders",
    },
    {
      id: 8,
      name: "Michael Clark",
      unitsPrice: "₹390,111",
      winloss: "40% Win/Loss",
      orders: "145 Orders",
    },
    {
      id: 9,
      name: "Amit Sethi",
      unitsPrice: "₹150,500",
      winloss: "93% Win/Loss",
      orders: "175 Orders",
    },
    {
      id: 10,
      name: "John Doe",
      unitsPrice: "₹269,420",
      winloss: "62% Win/Loss",
      orders: "120 Orders",
    },
  ];

  const topitemssold = [
    {
      id: 1,
      name: "Automotive Parts",
      units: "850 Units",
    },
    {
      id: 2,
      name: "Steel Sheets",
      units: "430 Units",
    },
    {
      id: 3,
      name: "Electronic Parts",
      units: "300 Units",
    },
    {
      id: 4,
      name: "Plastic Materials",
      units: "400 Units",
    },
    {
      id: 5,
      name: "Office Equipments",
      units: "150 Units",
    },
    {
      id: 6,
      name: "Automotive Parts",
      units: "850 Units",
    },
    {
      id: 7,
      name: "Steel Sheets",
      units: "430 Units",
    },
    {
      id: 8,
      name: "Electronic Parts",
      units: "300 Units",
    },
    {
      id: 9,
      name: "Plastic Materials",
      units: "400 Units",
    },
    {
      id: 10,
      name: "Office Equipments",
      units: "150 Units",
    },
  ];

  const topitemspurchase = [
    {
      id: 1,
      name: "Office Equipments",
      price: "₹2,27,459",
    },
    {
      id: 2,
      name: "Steel Sheets",
      price: "₹2,27,459",
    },
    {
      id: 3,
      name: "Plastic Materials",
      price: "₹2,27,459",
    },
    {
      id: 4,
      name: "Electronic Parts",
      price: "₹2,27,459",
    },
    {
      id: 5,
      name: "Automotive Parts",
      price: "₹2,27,459",
    },
    {
      id: 6,
      name: "Office Equipments",
      price: "₹2,27,459",
    },
    {
      id: 7,
      name: "Steel Sheets",
      price: "₹2,27,459",
    },
    {
      id: 8,
      name: "Plastic Materials",
      price: "₹2,27,459",
    },
    {
      id: 9,
      name: "Electronic Parts",
      price: "₹2,27,459",
    },
    {
      id: 10,
      name: "Automotive Parts",
      price: "₹2,27,459",
    },
  ];

  return (
    <div className="flex flex-row max-xl:flex-col justify-between gap-2 mt-2 mx-10 max-sm:mx-2 px-10 max-sm:px-5 bg-[#ffffff] shadow-xl border-2 border-[#e5e5e5] rounded-[10px]">
      <div className="flex flex-col gap-2 px-4 py-4 w-2/5 max-xl:w-full">
        <div className="flex flex-row justify-between w-full pb-4">
          <span className="text-[#000000] font-semibold text-[16px]">
            Splotlight
          </span>
          <button className="border-2 border-[#e5e5e5] text-[14px] text-[#000000] px-3 py-1 rounded-[10px] bg-[#f7f9fb] cursor-pointer">
            All Region
          </button>
        </div>
        <img src={worldmap} alt="worldmap" />
        <div className="flex flex-row items-center gap-2 px-1 py-1 border-2 border-[#e5e5e5] rounded-full h-fit w-fit cursor-pointer">
          {clientsupplier ? (
            <>
              <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                SUPPLIERS
              </span>
              <span
                className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                onClick={() => setclientsupplier(false)}
              >
                CLIENTS
              </span>
            </>
          ) : (
            <>
              <span
                className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                onClick={() => setclientsupplier(true)}
              >
                SUPPLIERS
              </span>
              <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                CLIENTS
              </span>
            </>
          )}
        </div>
        <div className="flex flex-col h-[200px] overflow-y-scroll space-y-3 gap-2 mt-5">
          {clientSuplier.map((item) => {
            const { id, name, unitsPrice, winloss, orders } = item;
            return (
              <div
                key={id}
                className="flex flex-row justify-between items-center gap-8 border-2 border-[#f7f9fb] bg-[#f7f9fb] rounded-[10px] px-4 py-1 text-[12px]"
              >
                <div className="flex whitespace-nowrap">
                  <span className="font-bold">#{id} </span>
                  <span> {name}</span>
                </div>
                <span className="px-3 py-1 h-fit w-fit">{unitsPrice}</span>
                <span className="px-3 py-1 h-fit w-fit flex whitespace-nowrap">
                  {winloss}
                </span>
                <span className="px-3 py-1 h-fit w-fit flex whitespace-nowrap">
                  {orders}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="self-stretch w-[2px] bg-gray-300 my-4"></div>
      <div className="flex flex-col gap-2 py-4 mt-2 mb-4">
        <div className="flex flex-row justify-between items-center">
          <span className="text-[#000000] font-semibold text-[16px]">
            Top Items Sold
          </span>
          <div className="flex flex-row items-center gap-2 px-1 py-1 border-2 border-[#e5e5e5] rounded-full h-fit w-fit cursor-pointer">
            {itemsoldmode ? (
              <>
                <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                  Value
                </span>
                <span
                  className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                  onClick={() => setitemsoldmode(false)}
                >
                  Vol.
                </span>
              </>
            ) : (
              <>
                <span
                  className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                  onClick={() => setitemsoldmode(true)}
                >
                  Value
                </span>
                <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                  Vol.
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col h-[460px] overflow-y-scroll space-y-3 gap-2 mt-5">
          {topitemssold.map((item) => {
            const { id, name, units } = item;
            return (
              <div
                key={id}
                className="flex flex-row justify-between items-center gap-8 border-2 border-[#f7f9fb] bg-[#f7f9fb] rounded-[10px] px-4 py-1 text-[12px]"
              >
                <div>
                  <span className="font-bold">#{id} </span>
                  <span>{name}</span>
                </div>
                <span className="px-3 py-1 border-2 border-[#e5e5e5] rounded-[10px] h-fit w-fit">
                  {units}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="self-stretch w-[2px] bg-gray-300 my-4"></div>
      <div className="flex flex-col gap-2 py-4 mt-2 mb-4">
        <div className="flex flex-row justify-between items-center">
          <span className="text-[#000000] font-semibold text-[16px]">
            Top Items Purchased
          </span>
          <div className="flex flex-row items-center gap-2 px-1 py-1 border-2 border-[#e5e5e5] rounded-full h-fit w-fit cursor-pointer">
            {itempurchasemode ? (
              <>
                <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                  Vol.
                </span>
                <span
                  className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                  onClick={() => setitempurchasemode(false)}
                >
                  Value
                </span>
              </>
            ) : (
              <>
                <span
                  className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                  onClick={() => setitempurchasemode(true)}
                >
                  Vol.
                </span>
                <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                  Value
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col h-[460px] overflow-y-scroll space-y-3 gap-2 mt-5">
          {topitemspurchase.map((item) => {
            const { id, name, price } = item;
            return (
              <div
                key={id}
                className="flex flex-row justify-between items-center gap-8 border-2 border-[#f7f9fb] bg-[#f7f9fb] rounded-[10px] px-4 py-1 text-[12px]"
              >
                <div>
                  <span className="font-bold">#{id} </span>
                  <span>{name}</span>
                </div>
                <span className="px-3 py-1 font-bold h-fit w-fit">{price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemsSoldAnalytics;
