import React from 'react'


interface Props {
    score: number
}
const LinearProgressBar: React.FC<Props> = ({ score }) => {
    return (
        <div className="w-full bg-[#D6D6D6] rounded-full my-3">
            <div className={`w-full py-1.5  ${score < 20 ? "bg-red-500" : score < 30 ? "bg-[#a86750]" : "bg-[#E06B42]"} rounded-full`} style={{ width: `${score}%` }}></div>
        </div>
    )
}

export default LinearProgressBar