import ReactApexChart from "react-apexcharts";
import { useState } from "react";

function InventoryOverview() {
  const [mode, setmode] = useState(false);
  const [dailystate] = useState({
    series: [
      {
        name: "Sales",
        data: [850, 1200, 1400, 850, 1050, 1500, 1300],
      },
      {
        name: "Purchases",
        data: [400, 650, 750, 500, 1000, 600, 500],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 200,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      colors: ["#4F45E4", "#d6d4f5"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Week1",
          "Week2",
          "Week3",
          "Week4",
          "Week5",
          "Week6",
          "Week7",
        ],
      },
      legend: {
        horizontalAlign: "right",
      },
    },
  });
  const [weeklystate] = useState({
    series: [
      {
        name: "Sales",
        data: [650, 900, 1000, 650, 1250, 850, 650],
      },
      {
        name: "Purchases",
        data: [500, 750, 850, 600, 1100, 700, 600],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 200,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      colors: ["#4F45E4", "#d6d4f5"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      legend: {
        horizontalAlign: "right",
      },
    },
  });

  return (
    <div className="ml-10 px-10 pt-4 mt-2 mb-4 w-1/3 max-xl:w-fit bg-[#ffffff] shadow-xl border-2 border-[#e5e5e5] rounded-[10px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[16px] font-bold text-[#000000]">
            Inventory Overview
          </span>
          <span className="text-[12px] font-normal text-[#7c7d7e]">
            In-Stock Products:{" "}
            <span className="font-semibold">3,200 Units</span>
          </span>
        </div>

        <div className="flex flex-row items-center gap-4 px-3 py-1 border-2 border-[#e5e5e5] rounded-full h-fit cursor-pointer">
          {mode ? (
            <>
              <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                DAILY
              </span>
              <span
                className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                onClick={() => setmode(false)}
              >
                WEEKLY
              </span>
            </>
          ) : (
            <>
              <span
                className="px-3 py-1 rounded-full text-[#000000] bg-[#ffffff] text-[12px]"
                onClick={() => setmode(true)}
              >
                DAILY
              </span>
              <span className="px-3 py-1 rounded-full text-[#ffffff] bg-[#4F45E4] text-[12px]">
                WEEKLY
              </span>
            </>
          )}
        </div>
      </div>
      {mode ? (
        <>
          <div id="chart">
            <ReactApexChart
              options={weeklystate.options}
              series={weeklystate.series}
              type="bar"
              height={200}
            />
          </div>
          <div id="html-dist"></div>
        </>
      ) : (
        <>
          <div id="chart">
            <ReactApexChart
              options={dailystate.options}
              series={dailystate.series}
              type="bar"
              height={200}
            />
          </div>
          <div id="html-dist"></div>
        </>
      )}
    </div>
  );
}

export default InventoryOverview;
