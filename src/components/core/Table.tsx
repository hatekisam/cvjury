import clsx from "clsx";
import React from "react";

const Table: React.FC<TableProps> = ({ tabs, data, headBg }) => {
  return (
    <div
      style={
        !headBg
          ? { boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15) " }
          : { boxShadow: "none" }
      }
      className="rounded-3xl bg-red-500"
    >
      <table className="w-full overflow-x-scroll bg-white rounded-3xl ">
        <thead style={{ background: headBg }}>
          <tr className="rounded-t-3xl">
            {tabs.map((tab, i) => (
              <th
                key={i}
                style={{ width: `${tab.width}%` }}
                className={`text-left px-5 pt-20 pl-10 pb-3  border border-[#E2DFDF] border-t-0 ${
                  i == 0 && "rounded-tl-3xl border-none"
                } ${
                  i == tabs.length - 1 && "rounded-tr-3xl border-t-0 border-r-0"
                }`}
                dangerouslySetInnerHTML={{ __html: tab.name }}
              ></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx(
                "bg-white  ",
                rowIndex === data.length - 1 && "border-none"
              )}
            >
              {tabs.map((tab, colIndex) => (
                <td
                  key={colIndex}
                  className={clsx(
                    "border border-[#E2DFDF] pl-10 px-4 py-4",
                    rowIndex === data.length - 1 &&
                      colIndex === 0 &&
                      "border-b-0 border-l-0 rounded-bl-3xl",
                    rowIndex === data.length - 1 &&
                      colIndex === tabs.length - 1 &&
                      "border-b-0 border-r-0 rounded-br-3xl",
                    colIndex === 0 && "border-l-0",
                    colIndex === tabs.length - 1 && "border-r-0",
                    rowIndex === data.length - 1 && "border-b-0 pb-10"
                  )}
                >
                  {rowData[tab.title] ? rowData[tab.title] : "10"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
