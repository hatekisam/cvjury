import React from "react";

interface Tab {
  title: string;
  width: number;
  background?: string;
}

interface DataToTabs {
  [key: string]: string | number;
}

interface Props {
  tabs: Tab[];
  data: DataToTabs[];
}

const ColouredTable: React.FC<Props> = ({ tabs, data }) => {
  return (
    <table
      className="w-full bg-white rounded-3xl "
      style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
    >
      <tbody>
        {data.map((rowData, i) => (
          <tr
            key={i}
            className={`text-right   ${
              i == 0
                ? "border-top-0"
                : i == tabs.length - 1
                ? "border-b-0"
                : "border"
            }`}
          >
            {tabs.map((tab, colIndex) => (
              <td
                style={{ background: tab.background }}
                key={colIndex}
                className={`${
                  !tab.background
                    ? "border  border-[#E2DFDF]"
                    : i == 0
                    ? "rounded-tl-[20px]"
                    : i === tabs.length - 1 && "rounded-bl-[20px]"
                }  px-4 py-2`}
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
