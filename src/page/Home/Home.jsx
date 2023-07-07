import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import InfoCard from '../../components/cards/InfoCard'
import ChartCard from '../../components/cards/ChartCard'
import TwoCards from '../../components/cards/TwoCards'
import { ThumbUpOutlined, GroupOutlined, PaidOutlined, SellOutlined} from '@mui/icons-material'

 const cardData = [
  {
    id:1,
    title:"Total Revenue",
    earnings:"2,129,430",
    icon: <PaidOutlined />
  },
  {
    id:2,
    title:"Total Transactions",
    earnings:"1,520",
    icon: <SellOutlined />,
  },
  {
    id:3,
    title:"Total Likes",
    earnings:"9,721",
    icon: <ThumbUpOutlined />,
  },
  {
    id:4,
    title:"Total Users",
    earnings:"892",
    icon: <GroupOutlined />,
  }
]



const Home = () => {
  return (
    <div className='home'>
      <div className='home-left'>
       <Sidebar />
      </div>
      <div className='home-right'>
       <div className="home-navbar">
       <Navbar />
       </div>
        <div className='home-cards'>
              {
                cardData?.map((data)=>{
                 return ( 
                 <InfoCard data={data} key={data.id} />
                 )
                })
              }
        </div>
        <div className='home-chart'>
            <ChartCard />
        </div>
        <div className="home-twoCards">
            <TwoCards />
        </div>
      </div>
    </div>
  )
}

export default Home