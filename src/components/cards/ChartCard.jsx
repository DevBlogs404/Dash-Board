import React from 'react'
import './chartCard.scss'
import { ArrowDropDown} from'@mui/icons-material'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
// Sample chart data
const pdata = [
    {
        name: 'Week 1',
        Guest: 11,
        User: 120
    },
    {
        name: 'Week 2',
        Guest: 15,
        User: 12
    },
    {
        name: 'Week 3',
        Guest: 5,
        User: 10
    },
    {
        name: 'Week4',
        Guest: 10,
        User: 5
    },
];

const ChartCard = () => {
  return (
    <div className='chartCard'>
      <div className='chartInfo'>
          <div className='chartInfo-left'>
            <p>Activity</p>
            <span>May-June, 2021 <ArrowDropDown /> </span>
          </div>
          <div className='chartInfo-right'>
            <div className='guest'>
            <div></div>
            <span>Guest</span>
            </div>
            <div className='user'>
            <div></div>
            <span>User</span>
            </div>
          </div>
      </div>
      <div className='chart'>
      <ResponsiveContainer width='100%' height="100%">
                <LineChart data={pdata}>
                    <CartesianGrid strokeDasharray={1} vertical={false} />
                    <XAxis dataKey="name" 
                        interval={'preserveStart'}/>
                    <YAxis axisLine={false} ></YAxis>
                    <Tooltip />
                    <Line dataKey="Guest" 
                        stroke="red" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line dataKey="User"
                        stroke="green" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartCard