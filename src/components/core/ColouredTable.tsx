import React from "react";

const ColouredTable: React.FC<{
  tabWidths: number[];
  data: ATSData[] | SalesData[]; // Assuming ATSData and SalesData are arrays
  tabs: TabType[]; // You need to define or pass the "tabs" prop
}> = ({ tabWidths, data, tabs }) => {
  return (
    <table
      className="w-full bg-white rounded-3xl"
      style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
    >
      <tbody>
        {data.map((rowData, i) => (
          <tr
            key={i}
            className={`text-right   ${
              i === 0
                ? "border-top-0"
                : i === tabs.length - 1
                ? "border-b-0"
                : "border"
            }`}
          >
            {tabs.map((tab, colIndex) => (
              <td
                style={{
                  background: tab.background,
                  width: tabWidths[colIndex] + "px", // Set the width based on tabWidths prop
                }}
                key={colIndex}
                className={`${
                  !tab.background ? "border border-[#E2DFDF]" : ""
                }  ${
                  i === 0
                    ? "rounded-tl-[20px]"
                    : i === tabs.length - 1 && "rounded-bl-[20px]"
                } px-4 py-2`}
              >
                {rowData[tab.title] ? rowData[tab.title] : "10"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColouredTable;
