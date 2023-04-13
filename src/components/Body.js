import { React } from 'react'
import './Body.css'
import HomeImage from '../assets/home_photo.jpg'

function Body() {
    return (
        <div className='body-container'>
            <div className='body-section home-container'>
                <div className='topline-container'>
                    <p> Software Development </p>
                    <p className='break'> | </p>
                    <p> Data & Analytics </p>
                    <p className='break'> | </p>
                    <p> Landscape Photography </p>
                </div>
                <div className='img-container'>
                    <img src={HomeImage} className="home-profile" alt="Home_Image"/>
                </div>
                <div className='blurb-container'>
                    <p>
                        Hi, I'm
                    </p>
                    <p className='name-para'>
                        DHAIRYA TRIVEDI
                    </p>
                </div>
            </div>
            <div className="body-section about-container">
            </div>
        </div>
    )
};

export default Body;
