import React from "react";
import { SkillGapIcon, UploadRescan } from "./core/icons";
import Table from "./core/Table";

const JobResumeComparison: React.FC<JobResumeProps> = ({
  tableTitles,
  tableData,
}) => {
  return (
    <div className="">
      <div className="my-10 ">
        <div className="flex flex-col sm:flex-row gap-3 items-center px-5 md:px-12 lg:px-24">
          <p className="uppercase transition-all duration-150  text-[22px]  md:text-[32px] lg:text-[40px]">
            Job Description and Resume Compared:{" "}
          </p>
          <div
            style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
            className=" bg-white border border-[#E06B42] text-[#E06B42] w-fit flex items-center gap-3 p-2 rounded-full"
          >
            <SkillGapIcon />
            <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg: pr-5">
              SKILLS GAP IDENTIFIED
            </p>
          </div>
        </div>
        <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg:text-[24px] my-5 px-5 md:px-12 lg:px-24">
          Let's compare the hard skills from the resume and the job description
          to identify the skill gaps:
        </p>
        <div className="my-10 overflow-x-scroll px-5 md:px-12 lg:px-24 pb-20">
          <div className="flex justify-between">
            <div></div>
            <p className="uppercase transition-all duration-150  text-[18px]  md:text-[24px] lg:text-3xl">
              Table 4{" "}
            </p>
          </div>
          <Table tabs={tableTitles} data={tableData} />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center my-10 px-5 md:px-12 lg:px-24">
        <p className="text-black transition-all duration-150  text-[16px]  md:text-[20px] lg:text-[24px] text-center">
          Finally, click to see your resume’s overall ‘Similarity Score’:
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] transition-all duration-150  text-[16px]  md:text-[20px] lg:text-[24px]">
          <p>See Similarity Score</p>
          <UploadRescan />
        </button>
      </div>
    </div>
  );
};

export default JobResumeComparison;
