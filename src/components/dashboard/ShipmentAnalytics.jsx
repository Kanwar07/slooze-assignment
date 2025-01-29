import { useState } from "react";
import destinationlogo from "../../assets/destinationlogo.svg";
import startlogo from "../../assets/startlogo.svg";
import arrowright from "../../assets/arrowright.svg";
import mapsdirection from "../../assets/mapsdirection.svg";
import filter from "../../assets/filter.svg";

function ShipmentAnalytics() {
  const [shipmentid, setshipmentid] = useState("#003455MNP");
  const shipmentDetails = [
    {
      shipmentID: "#003455MNP",
      from: "87 Some Address",
      to: "15 Some Address",
    },
    {
      shipmentID: "#001432LDP",
      from: "87 Some Address",
      to: "15 Some Address",
    },
    {
      shipmentID: "#006577AKG",
      from: "87 Some Address",
      to: "15 Some Address",
    },
    {
      shipmentID: "#005589KBC",
      from: "87 Some Address",
      to: "15 Some Address",
    },
  ];

  const shipmentmoreDetails = [
    {
      id: 1,
      name: "Shipment ID",
      detail: shipmentid,
    },
    {
      id: 2,
      name: "Category",
      detail: "Electronics",
    },
    {
      id: 3,
      name: "Total Weight",
      detail: "329 kg",
    },
    {
      id: 4,
      name: "Destination",
      detail: "Bangalore",
    },
    {
      id: 5,
      name: "Est. Arrival",
      detail: "2 Hrs",
    },
  ];
  return (
    <div className="mr-10 max-xl:ml-10 px-5 pt-4 mt-2 mb-4 bg-[#ffffff] shadow-xl border-2 border-[#e5e5e5] rounded-[10px] w-fit max-xl:w-fit flex flex-row max-md:flex-col gap-8">
      <div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[16px] font-bold text-[#000000]">
            Shipment Analytics
          </span>
          <div className="text-[14px] font-semibold text-[#000000] bg-[#f7f9fb] flex flex-row gap-2 border border-[#e5e5e5] rounded-[10px] px-2 py-1">
            <img src={filter} alt="filter" /> <span>FILTERS</span>
          </div>
        </div>
        <div className="h-[220px] overflow-y-scroll space-y-3 pr-2 my-5">
          {shipmentDetails.map((shipment) => {
            const { shipmentID, from, to } = shipment;
            return (
              <div
                key={shipmentID}
                className="bg-[#f7f9fb] shadow-md border border-[#e5e5e5] rounded-lg px-4 mx-4 py-3 w-fit my-2 cursor-pointer hover:scale-105 hover:duration-500 hover:ease-in-out transition-transform"
                onClick={() => setshipmentid(shipmentID)}
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-[#7c7d7e] text-[12px]">
                    Shipment ID
                  </span>
                  <span className="text-[#000000] text-[16px] font-semibold">
                    {shipmentID}
                  </span>
                </div>
                <div className="flex flex-row items-center gap-2 mt-2 text-[12px]">
                  <img
                    src={startlogo}
                    alt="Start Location"
                    className="w-5 h-5"
                  />
                  <span className="text-[#7c7d7e]">{from}</span>
                  <img src={arrowright} alt="Arrow Right" className="w-4 h-4" />
                  <img
                    src={destinationlogo}
                    alt="Destination"
                    className="w-5 h-5"
                  />
                  <span className="text-[#7c7d7e]">{to}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-between mb-8 gap-2">
        <span className="border-2 border-[#e5e5e5] rounded-full w-fit px-3 py-1 bg-[#f7f9fb]">
          ID: <span className="font-semibold text-[#636464]">{shipmentid}</span>
        </span>
        <img src={mapsdirection} alt="mapsdirection" />
        <div className="flex flex-row justify-between">
          {shipmentmoreDetails.map((more, index) => {
            const { id, name, detail } = more;
            return (
              <div key={id} className="flex flex-row gap-3 items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] text-[#7c7d7e] font-normal">
                    {name}
                  </span>
                  <span className="text-[14px] text-[#000000] font-semibold">
                    {detail}
                  </span>
                </div>

                {index !== shipmentmoreDetails.length - 1 && (
                  <div className="h-full border-l border-gray-300"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShipmentAnalytics;
