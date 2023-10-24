import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
    score: number
}

const SimilarityBar: React.FC<Props> = ({ score }) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < score) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);
    return (
        <div className='w-[200px] h-[200px]'>
            <CircularProgressbar background value={percentage} text={`${percentage}%`} styles={{
                root: {},
                path: {
                    stroke: `#E06B42`,
                },
                text: {
                    fill: '#6A6A6A',
                    fontSize: '16px',
                },
                background: {
                    fill: 'white',
                },
            }} />
        </div>
    )
}

export default SimilarityBar