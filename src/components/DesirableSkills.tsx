import React from "react";
import { DesirableIcon, UploadRescan } from "./core/icons";
import Table from "./core/Table";

const DesirableSkills: React.FC<DesirableSkills> = ({
  tableTitles,
  tableData,
}) => {
  return (
    <div className="px-5 md:px-12 lg:px-24">
      <div className="my-10">
        <div
          style={{ boxShadow: "0px 13px 50px 0px rgba(0, 0, 0, 0.15)" }}
          className=" bg-white border border-[#0078D4] text-[#0078D4] w-fit flex items-center gap-3 py-0.5 md:py-2 p-2 rounded-full"
        >
          <DesirableIcon />
          <p className="transition-all duration-150  text-[18px]  md:text-[24px] lg:text-[28px] pr-5">
            DESIRABLE SKILLS
          </p>
        </div>
        <p className="transition-all duration-150  text-[16px]  md:text-[20px] lg:text-[24px] my-5">
          P.S.− While explicit mentions are a straightforward way to identify
          skills, there are often implied or contextual skills that
          professionals might possess based on the nature of their work, even if
          these skills aren't directly mentioned. <br /><br />
          Using the provided resume and job description, some potential
          desirable skills and attributes can be inferred.<br /><br /> When presenting these
          skills, especially in an interview or in a more detailed resume, it's
          essential to provide specific examples or experiences that demonstrate
          these attributes:
        </p>
        <div className="my-10">
          <div className="flex justify-between">
            <div></div>
            <p className="uppercase transition-all duration-150  text-[18px]  md:text-[24px] lg:text-3xl">
              Table 3{" "}
            </p>
          </div>
          <Table tabs={tableTitles} data={tableData} />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center my-10">
        <p className="text-black transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl text-center">
          More to come. Click to see the job description and resume compared —
          Skills Gap Identified:
        </p>
        <button className="flex gap-2 items-center text-[#E06B42] transition-all duration-150  text-[16px]  md:text-[20px] lg:text-2xl">
          <p>See Skills Gap Identified</p>
          <UploadRescan />
        </button>
      </div>
    </div>
  );
};

export default DesirableSkills;
