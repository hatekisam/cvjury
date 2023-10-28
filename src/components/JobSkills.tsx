import React from "react";
import { JobIcon, UploadRescan } from "./core/icons";
import Table from "./core/Table";

const JobSkills: React.FC<JobSkillsProps> = ({
  hardSkills,
  softSkills,
  hardTitles,
  softTitles,
}) => {
  return (
    <>
      <div className="my-10 relative">
        <div className="flex justify-between ">
          <div></div>
          <p className="uppercase transition-all duration-150  text-[18px]  md:text-[24px] lg:text-3xl ">
            Table 2{" "}
          </p>
        </div>
        <div
          style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
          className="absolute left-3 top-2 bg-white border border-[#6A6A6A] text-[#6A6A6A] flex items-center gap-3  py-0.5 md:py-2 p-2 rounded-full"
        >
          <JobIcon />
          <p className="transition-all duration-150  text-[18px]  md:text-[24px] lg:text-[30px] pr-5">
            JOB DESCRIPTION
          </p>
        </div>
        <Table tabs={hardTitles} data={hardSkills} />
        <div className="h-[40px]"></div>
        <Table tabs={softTitles} data={softSkills} />
      </div>
      <div className="flex flex-col gap-2 items-center my-10">
        <p className="text-black transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl text-center">
          Still, more to come. Click to see the suggested desirable skills:
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl">
          <p>See Desirable Skills</p>
          <UploadRescan />
        </button>
      </div>
    </>
  );
};

export default JobSkills;
