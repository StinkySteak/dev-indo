import React from 'react'
import LineChart from '../Components/LineChart'
import RuralCard from '../Components/RuralCard'
import './Rural.css'

const data = [
  { image: "Images/Img.jpg", name: "Desa Uma", population: 19, activities: 10 },
  { image: "Images/Img.jpg", name: "Megha", population: 19, activities: 10 },
  { image: "Images/Img.jpg", name: "Subham", population: 25, activities: 10 },
]

function Rural() {
  return (
    <div className='bg'>
      <div className='rural-table-container flex-center'>
        <table>
          <tr className='rural-table-tr-header'>
            <th>Image</th>
            <th>Rural Name</th>
            <th>Estimated Population</th>
            <th>Recent Activities (30d)</th>
            <th>Last 30 days</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr className='rural-table-tr' key={key}>
                <td><img width={120} src={val.image}></img></td>
                <td>{val.name}</td>
                <td>{val.population}</td>
                <td>{val.activities}</td>
                <td className='rural-table-chart'><LineChart /></td>
              </tr>
            )
          })}
        </table>
      </div>
    </div >
  )
}

export default Rural