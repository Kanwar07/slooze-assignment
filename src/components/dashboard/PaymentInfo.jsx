import paymenticon1 from "../../assets/paymenticon1.svg";
import paymenticon2 from "../../assets/paymenticon2.svg";
import paymenticon3 from "../../assets/paymenticon3.svg";
import paymenticon4 from "../../assets/paymenticon4.svg";

function PaymentInfo() {
  const payment = [
    {
      id: 1,
      name: "Payment Receivables",
      amount: "₹12,40,000",
      info: "Overdue Payments: ₹1,40,000",
      increase: "+3.87%",
      decrease: "",
      icon: paymenticon1,
    },
    {
      id: 2,
      name: "Payments Made",
      amount: "₹9,50,000",
      info: "Next Payment Due: 1 Week",
      increase: "",
      decrease: "",
      icon: paymenticon2,
    },
    {
      id: 3,
      name: "Total Purchases",
      amount: "₹15,20,000",
      info: "Suppliers: 6",
      increase: "+3.87%",
      decrease: "",
      icon: paymenticon3,
    },
    {
      id: 4,
      name: "Total Sales",
      amount: "₹18,00,000",
      info: "Top Selling Product: electronics",
      increase: "+3.87%",
      decrease: "",
      icon: paymenticon4,
    },
  ];
  return (
    <div className="px-10 py-4 flex flex-row justify-between gap-4 max-xl:flex-wrap">
      {payment.map((pay) => {
        const { id, name, amount, info, increase, decrease, icon } = pay;
        return (
          <div
            key={id}
            className="bg-[#ffffff] shadow-xl border-2 border-[#e5e5e5] flex-1 px-4 py-3 flex flex-row justify-between gap-4 items-start rounded-[10px] cursor-pointer hover:scale-105 hover:duration-500 hover:ease-in-out transition-transform"
          >
            <div>
              <span className="text-[16px] font-normal text-[#7c7d7e]">
                {name}
              </span>
              <div className="flex flex-row items-center gap-2">
                <span className="text-[26px] text-[#4F45E4] font-bold">
                  {amount}
                </span>
                <span className="text-[#19AC59] font-semibold text-[10px]">
                  {increase ? increase : null}
                </span>
                <span className="text-[#cc0000] font-semibold text-[10px]">
                  {decrease ? decrease : null}
                </span>
              </div>
              <span className="text-[12px] font-semibold text-[#7c7d7e]">
                {info}
              </span>
            </div>
            <img src={icon} alt={name} />
          </div>
        );
      })}
    </div>
  );
}

export default PaymentInfo;
