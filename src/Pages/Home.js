import React, { useState } from 'react'
import Recent from '../Components/Recent'
import './Home.css'
import Axios from 'axios'
import { DataContext } from '../DataContext'

function Home() {

    const [recentActivities, setRecentActivities] = useState([]);
    

    Axios.get('https://localhost:5001/GetActivity')
        .then(function (response) {
            // handle success
            console.log(response.data);
            setRecentActivities(response.data);
            console.log(recentActivities.length);
        })

    return (
        <div className='bg'>

            <div className='home-header-container'>
                <h1 className='home-header'>RECENT ACTIVITIES: {recentActivities.length}</h1>
            </div>

            <div className='home-flex-center'>

                {recentActivities.reverse().map((act, index) => (
                    <Recent title={act.ruralName} desc={act.issues} date={act.date} />
                ))}

            </div>
        </div>
    )
}

export default Home