import React from 'react';

interface Tab {
    title: string;
    width: number;
}

interface DataToTabs {
    [key: string]: string | number;
}

interface Props {
    tabs: Tab[];
    data: DataToTabs[];
}

const Table: React.FC<Props> = ({ tabs, data }) => {
    return (
        <table className='w-full bg-white rounded-3xl ' style={{ boxShadow: '0px 13px 50px 0px rgba(0, 0, 0, 0.15)' }}>
            <thead >
                <tr className='rounded-t-3xl'>
                    {tabs.map((tab, i) => (
                        <th key={i} style={{ width: `${tab.width}%` }} className={`text-left px-5 pt-12 pb-3  border border-[#E2DFDF] ${i == 0 && "rounded-tl-3xl"} ${i == tabs.length - 1 && "rounded-tr-3xl"}`}>{tab.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((rowData, rowIndex) => (
                    <tr key={rowIndex} className='text-right border border-[#E2DFDF]'>
                        {tabs.map((tab, colIndex) => (
                            <td key={colIndex} className='border border-[#E2DFDF] px-4 py-2'>{rowData[tab.title]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
