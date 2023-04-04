import { React } from 'react'
import './Body.css'
import HomeImage from '../assets/home_photo.png'

function Body() {
    return (
        <div className='body-container'>
            <div className='home-container'>
                <img src={HomeImage} className="home-profile" alt="Home_Image"/>
            </div>
            <div className="about-container">
            </div>
        </div>
    )
};

export default Body;
