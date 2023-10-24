import React from 'react'
import LinearProgress from '@material/react-linear-progress';
import '@material/react-linear-progress/dist/linear-progress.css';
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
            <LinearProgress
                buffer={1}
                progress={score}
                
            />
        </div>
    )
}

export default SimilarityBars