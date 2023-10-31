import React from "react";
import { DeleteIcon } from "./core/icons";

const JobDesc: React.FC = () => {
  return (
    <div className="w-full h-full  sm:w-[50%] flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-[80%] lg:w-[65%] text-center">
        <p className="text-[#6A6A6A] text-3xl">Job Description</p>
        <div className="h-[91%] p-5 border-dashed border border-black rounded-3xl ">
          <input
            type="text"
            placeholder="Enter Job Title"
            className="border-[#BCBCBC] border rounded-lg p-3 text-[13px] w-full  outline-none placeholder:text-gray-700 "
          />
          <div className="mt-5">
            <textarea
              className="border-[#BCBCBC] border rounded-lg p-3 text-[13px] w-full resize-none outline-none h-[260px] placeholder:text-gray-700"
              placeholder="Paste your Job Description (Don't include the 'About our company' texts)"
            ></textarea>
          </div>
          <div className="flex mt-1 justify-between">
            <div></div>
            <button>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 md:my-0 w-full md:w-[20%] lg:w-[35%] flex items-center justify-center text-xs"></div>
    </div>
  );
};

export default JobDesc;
