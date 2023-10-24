import React from 'react'
import Table from '../components/core/Table';
import { DesirableIcon, JobIcon, PrintIcon, ResumeIcon, ShareIcon, SkillGapIcon, UploadRescan } from '../components/core/icons';
import SimilarityBar from '../components/Similarity';
import SimilarityLinearBar from '../components/SimilarityBars';

const Analyzer: React.FC = () => {
    const dummyTabs = [
        { title: 'HardSkills', width: 80 },
        { title: 'Frequency', width: 20 },
    ];
    const dummyTabs2 = [
        { title: 'SoftSkills', width: 80 },
        { title: 'Frequency', width: 20 },
    ];
    const dummyTabs3 = [
        { title: 'Desirable Skills', width: 30 },
        { title: 'Explanatory Notes', width: 70 },
    ];
    const dummyTabs4 = [
        { title: 'Skills', width: 15 },
        {
            title: `Found in Resume
         (Frequency)`, width: 25
        },
        {
            title: `Found in Job Description 
        (Frequency)`, width: 30
        },
        {
            title: `Skills Gap 
         (Skills Missing from Resume)`, width: 30
        },
    ];

    const dummyData = [
        { HardSkills: "Typing Fast", Frequency: 20 },
        { HardSkills: "Typing Fast", Frequency: 20 },
        { HardSkills: "Typing Fast", Frequency: 20 },
        { HardSkills: "Typing Fast", Frequency: 20 }
    ];
    const similarityLinearData = [
        {
            title: "ATS Best Practices ",
            issues: 1,
            score: 80
        },
        {
            title: "Sales Index Match ",
            issues: 1,
            score: 70
        },
        {
            title: "Hard Skills Match ",
            issues: 0,
            score: 100
        },
        {
            title: "Soft Skills Match ",
            issues: 0,
            score: 20
        },
    ]
    return (
        <div className='w-screen bg-[#F1F1F1] px-5 md:px-12 lg:px-24 py-20 h-full overflow-y-auto'>
            <p className='text-[40px] my-2'>Hard and Soft Skills (Frequencies)</p>
            <p className='text-2xl my-2'>Based on the resume and job description you uploaded, here are the hard and soft skills we extracted from them:</p>
            <div className='my-10 relative'>
                <div className="flex justify-between">
                    <div></div>
                    <p className='uppercase text-3xl'>Table 1 </p>
                </div>
                <div style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }} className="absolute left-3 top-2 bg-white border border-[#29AB82] text-[#29AB82] flex items-center gap-3 p-2 rounded-full">
                    <ResumeIcon />
                    <p className='text-[30px] pr-5'>RESUME</p>
                </div>
                <Table tabs={dummyTabs} data={dummyData} />
                <div className="h-[40px]"></div>
                <Table tabs={dummyTabs2} data={dummyData} />
            </div>
            <div className='my-10 relative'>
                <div className="flex justify-between">
                    <div></div>
                    <p className='uppercase text-3xl'>Table 2 </p>
                </div>
                <div style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }} className="absolute left-3 top-2 bg-white border border-[#6A6A6A] text-[#6A6A6A] flex items-center gap-3 p-2 rounded-full">
                    <JobIcon />
                    <p className='text-[30px] pr-5'>JOB DESCRIPTION</p>
                </div>
                <Table tabs={dummyTabs} data={dummyData} />
                <div className="h-[40px]"></div>
                <Table tabs={dummyTabs2} data={dummyData} />
            </div>
            <div className="my-10">
                <div style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }} className=" bg-white border border-[#0078D4] text-[#0078D4] w-fit flex items-center gap-3 p-2 rounded-full">
                    <DesirableIcon />
                    <p className='text-[30px] pr-5'>SEE DESIRABLE SKILLS</p>
                </div>
                <p className='text-[24px] my-5'>P.S.− While explicit mentions are a straightforward way to identify skills, there are often implied or contextual skills that professionals might possess based on the nature of their work, even if these skills aren't directly mentioned. Using the provided resume and job description, some potential desirable skills and attributes can be inferred.When presenting these skills, especially in an interview or in a more detailed resume, it's essential to provide specific examples or experiences that demonstrate these attributes:</p>
                <div className='my-10'>
                    <div className="flex justify-between">
                        <div></div>
                        <p className='uppercase text-3xl'>Table 3 </p>
                    </div>
                    <Table tabs={dummyTabs3} data={dummyData} />
                </div>
            </div>
            <div className="my-10">
                <div className="flex gap-3 items-center">
                    <p className='uppercase text-[26px]'>Job Description and Resume Compared: </p>
                    <div style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }} className=" bg-white border border-[#E06B42] text-[#E06B42] w-fit flex items-center gap-3 p-2 rounded-full">
                        <SkillGapIcon />
                        <p className='text-[26px] pr-5'>SKILLS GAP IDENTIFIED</p>
                    </div>
                </div>
                <p className='text-[20px] my-5'>Let's compare the hard skills from the resume and the job description to identify the skill gaps:</p>
                <div className='my-10'>
                    <div className="flex justify-between">
                        <div></div>
                        <p className='uppercase text-3xl'>Table 4 </p>
                    </div>
                    <Table tabs={dummyTabs4} data={dummyData} />
                </div>
            </div>
            <div className="mt-28">
                <div className="flex justify-between items-center">
                    <div></div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <button className="bg-white p-2 rounded-xl">
                                <ShareIcon />
                            </button>
                            <p className='text-[#444B54] text-[15px] font-medium'>Share</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="bg-white p-2 rounded-xl">
                                <PrintIcon />
                            </button>
                            <p className='text-[#444B54] text-[15px] font-medium'>Print</p>
                        </div>
                    </div>
                </div>
                <p className='text-4xl text-[#6A6A6A] font-semibold my-4'>Similarity Score</p>
                <div className="flex items-center justify-between my-10">
                    <div className='w-[60%] flex items-center gap-5'>
                        <SimilarityBar score={20} />
                        <button className='flex gap-2 items-center text-[#E06B42] text-2xl'>
                            <p>Upload and Rescan</p>
                            <UploadRescan />
                        </button>
                    </div>
                    <div className='w-[40%] flex flex-col items-center gap-5'>
                        {similarityLinearData.map((info, i) => {
                            return (
                                <SimilarityLinearBar key={i} score={info.score} issues={info.issues} title={info.title} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyzer