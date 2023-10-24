import React from 'react'
interface Props {
    title: string;
    issues: number;
    score: number
}

const SimilarityBars: React.FC<Props> = ({ title, issues, score }) => {
    return (
        <div className='w-full'>
            <div className="flex justify-between items-center ">
                <p>{title}</p>
                <p>{issues} Issue{(issues === 0 || issues > 1) && "s"} to fix</p>
            </div>
            <div className="w-full bg-[#D6D6D6] rounded-full my-3">
                <div className={`w-full py-2  ${score < 20 ? "bg-red-500" : score < 30 ? "bg-[#a86750]" : "bg-[#E06B42]"} rounded-full`} style={{ width: `${score}%` }}></div>
            </div>
        </div>
    )
}

export default SimilarityBars