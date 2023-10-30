import React from "react";
import { DeleteIcon } from "./core/icons";

const JobDesc: React.FC = () => {
  return (
    <div className="w-full  sm:w-[50%] flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-[80%] lg:w-[65%] text-center">
        <p className="text-[#6A6A6A] text-3xl">Job Description</p>
        <div className="p-5 border-dashed border border-black rounded-3xl ">
          <input
            type="text"
            placeholder="Enter Job Title"
            className="border-[#BCBCBC] border rounded-lg p-3 text-[13px] w-full  outline-none "
          />
          <div className="mt-5">
            <textarea
              className="border-[#BCBCBC] border rounded-lg p-3 text-[13px] w-full resize-none outline-none h-[200px]"
              placeholder="Or paste your resume here"
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
