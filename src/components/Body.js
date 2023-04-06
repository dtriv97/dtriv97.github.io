import { React } from 'react'
import './Body.css'
import HomeImage from '../assets/home_photo.jpg'

function Body() {
    return (
        <div className='body-container'>
            <div className='body-section home-container'>
                <div className='column-container left'>
                    <img src={HomeImage} className="home-profile" alt="Home_Image"/>
                </div>
                <div className="column-container right">
                    <div className='blurb-container'>
                        <p>
                            Hi, my name is...
                        </p>
                    </div>
                    <div className='name-container'>
                        <p>
                            DHAIRYA TRIVEDI
                        </p>
                    </div>
                </div>
            </div>
            <div className="body-section about-container">
                <p>This is some content</p>
            </div>
        </div>
    )
};

export default Body;
