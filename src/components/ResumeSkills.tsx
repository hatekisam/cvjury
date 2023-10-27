import React from "react";
import { ResumeIcon, UploadRescan } from "./core/icons";
import Table from "./core/Table";

const ResumeSkills: React.FC = () => {
  return (
    <div>
      <p className="transition-all duration-150  text-[22px]  md:text-[32px] lg:text-[40px] my-2">
        Hard and Soft Skills (Frequencies)
      </p>
      <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl my-2">
        Based on the resume and job description you uploaded, here are the hard
        and soft skills we extracted from them:
      </p>
      <div className="my-10 relative">
        <div className="flex justify-between">
          <div></div>
          <p className="uppercase transition-all duration-150  text-[18px]  md:text-[24px] lg:text-3xl">
            Table 1{" "}
          </p>
        </div>
        <div
          style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
          className="absolute left-3 top-2 bg-white border border-[#29AB82] text-[#29AB82] flex items-center gap-3 py-0.5 md:py-2 p-2 rounded-full"
        >
          <ResumeIcon />
          <p className="transition-all duration-150  text-[18px]  md:text-[24px] lg:text-3xl pr-5">
            RESUME
          </p>
        </div>
        <Table tabs={dummyTabs} data={dummyData} />
        <div className="h-[40px]"></div>
        <Table tabs={dummyTabs2} data={dummyData} />
      </div>
      <div className="flex flex-col gap-2 items-center my-10">
        <p className="text-black transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl text-center">
          Still, more to come. Click to see the extracted job description’s hard
          and soft skills (their frequencies):
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl">
          <p>See Hard & Soft Skills Job Description</p>
          <UploadRescan />
        </button>
      </div>
    </div>
  );
};

export default ResumeSkills;
