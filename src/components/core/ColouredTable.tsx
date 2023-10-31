import clsx from "clsx";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

interface Props {
  tabs: Tab[];
  data: DataToTabs[];
}

const ColouredTable: React.FC<Props> = ({ tabs, data }) => {
  return (
    <div style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}>
      <table className="w-full bg-white rounded-[20px] border-none ">
        <tbody>
          {data.map((rowData, i) => (
            <tr
              key={i}
              className={`${
                i == 0
                  ? "border-top-0 rounded-tl-[20px]"
                  : i == data.length - 1
                  ? "border-none "
                  : "border-none"
              }`}
            >
              {tabs.map((tab, colIndex) => (
                <td
                  style={{ background: tab.background, width: `${tab.width}%` }}
                  key={colIndex}
                //   className={`${
                //     !tab.background
                //       ? "border  border-[#E2DFDF]"
                //       : i == 0
                //       ? "rounded-tl-[20px] "
                //       : i === data.length - 1 && "rounded-bl-[20px]  bg-red-500"
                //   }  px-4 py-2`}
		className={clsx("px-4  py-2",i == 0 && colIndex == 0 && "rounded-tl-[20px]",i ===data.length - 1 && colIndex === 0 && "rounded-bl-[20px]",colIndex!= 0 && colIndex<tabs.length -1 && "border",colIndex === tabs.length-1 && i != data.length -1 && "border-b border-l",i ==0 && "border-t-0",i === data.length-1 && "border-b-0"  )}
                >
                  {rowData[tab.title] == true && tab.title == "Confirmed" ? (
                    <div className="text-green-500">{<FaRegCheckCircle />}</div>
                  ) : tab.title == "Notification" ? (
                    <div className="text-red-500">{<AiOutlineBell/>}</div>
                  ) : tab.title == "Title" ? (
                    <div className="text-red-500">{tab.title}</div>
                  ) : rowData[tab.title] ? (
                    rowData[tab.title]
                  ) : (
                    <div className="text-red-500">
                      <FaRegTimesCircle />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColouredTable;
