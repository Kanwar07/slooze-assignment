import ReactApexChart from "react-apexcharts";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../context/Context";

function InventoryOverview() {
  const { selectedColor, toggleColor } = useContext(ContextData);
  const [mode, setmode] = useState(false);
  const [dailystate, setDailystate] = useState({
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
      colors: [selectedColor || "#3498db", selectedColor || "#3498db"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: toggleColor ? "#ffffff" : "#000000",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: toggleColor ? "#ffffff" : "#000000",
          },
        },
      },
      legend: {
        horizontalAlign: "right",
        labels: {
          style: {
            colors: toggleColor ? "#ffffff" : "#000000",
          },
        },
      },
    },
  });

  const [weeklystate, setWeeklyState] = useState({
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
      colors: [selectedColor || "#3498db", selectedColor || "#3498db"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: toggleColor ? "#ffffff" : "#000000",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: toggleColor ? "#ffffff" : "#000000",
          },
        },
      },
      legend: {
        horizontalAlign: "right",
        labels: {
          style: {
            colors: toggleColor ? "#ffffff" : "#000000",
          },
        },
      },
    },
  });

  useEffect(() => {
    setDailystate((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        colors: [selectedColor || "#3498db", selectedColor || "#3498db"],
        xaxis: {
          ...prevState.options.xaxis,
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: {
            style: {
              colors: toggleColor ? "#ffffff" : "#000000",
            },
          },
        },
        yaxis: {
          ...prevState.options.yaxis,
          labels: {
            style: {
              colors: toggleColor ? "#ffffff" : "#000000",
            },
          },
        },
        legend: {
          ...prevState.options.legend,
          horizontalAlign: "right",
          labels: {
            style: {
              colors: toggleColor ? "#ffffff" : "#000000",
            },
          },
        },
      },
    }));

    setWeeklyState((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        colors: [selectedColor || "#3498db", selectedColor || "#3498db"],
        xaxis: {
          ...prevState.options.xaxis,
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: {
            style: {
              colors: toggleColor ? "#ffffff" : "#000000",
            },
          },
        },
        yaxis: {
          ...prevState.options.yaxis,
          labels: {
            style: {
              colors: toggleColor ? "#ffffff" : "#000000",
            },
          },
        },
        legend: {
          ...prevState.options.legend,
          horizontalAlign: "right",
          labels: {
            style: {
              colors: toggleColor ? "#ffffff" : "#000000",
            },
          },
        },
      },
    }));
  }, [selectedColor, toggleColor]);

  return (
    <div
      className={`${
        toggleColor
          ? "bg-[#000000] text-[#ffffff]"
          : "bg-[#ffffff] text-[#000000]"
      } ml-10 max-sm:ml-2 max-sm:mr-2 px-10 max-sm:px-0 pt-4 mt-2 mb-4 w-1/3 max-xl:w-fit max-sm:px-5 shadow-xl border-2 border-[#e5e5e5] rounded-[10px]`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[16px] font-bold ">Inventory Overview</span>
          <span className="text-[12px] font-normal">
            In-Stock Products:{" "}
            <span className="font-semibold">3,200 Units</span>
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 px-1 py-1 border-2 border-[#e5e5e5] rounded-full h-fit cursor-pointer">
          {mode ? (
            <>
              <span
                className="px-3 py-1 rounded-full text-[12px]"
                style={{
                  backgroundColor: selectedColor,
                }}
              >
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
              <span
                className="px-3 py-1 rounded-full text-[#ffffff] text-[12px]"
                style={{
                  backgroundColor: selectedColor,
                }}
              >
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
