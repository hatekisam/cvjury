import React from "react";

const Table: React.FC<TableProps> = ({ tabs, data, headBg }) => {
  return (
    <table
      className="w-full overflow-x-scroll bg-inherit rounded-3xl "
      style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
    >
      <thead style={{ background: headBg }}>
        <tr className="rounded-t-3xl">
          {tabs.map((tab, i) => (
            <th
              key={i}
              style={{ width: `${tab.width}%` }}
              className={`text-left px-5 pt-20 pl-10 pb-3  border border-[#E2DFDF] ${
                i == 0 && "rounded-tl-3xl"
              } ${i == tabs.length - 1 && "rounded-tr-3xl"}`}
            >
              {tab.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex} className="bg-white   border border-[#E2DFDF]">
            {tabs.map((tab, colIndex) => (
              <td key={colIndex} className="border border-[#E2DFDF] pl-10 px-4 py-2">
                {rowData[tab.title] ? rowData[tab.title] : "10"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
