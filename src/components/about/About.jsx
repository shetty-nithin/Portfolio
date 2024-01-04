import React from 'react';
import './about.scss';
import saffronBlueImage from '../../photos/nandihill.jpg'

const About = () => {
    return (
        <div id='aboutSection' className="aboutSection container">
            <div className="aboutePhoto col-lg-4 col-md-5 col-sm-7">
                <div className='photo'>
                    <img src={saffronBlueImage} alt="nithin's"/>
                </div>
            </div>
            <div className="abouteText col-lg-8 col-md-7">
                <div className="name animateLeft">
                    <h3>Nithin Shetty</h3>
                    <h4>Software Developer | Signalling Engineer</h4>
                </div>
                <div className="text">
                    <p>
                        My journey spans roles in system verification and validation at Alstom and Hitachi Rail STS.
                        While my current involvement in various metro projects focuses on 'signalling' system verification, my true passion lies in being a dedicated and enthusiastic software developer. Transitioning into full-fledged software development, I'm dedicated to creating user-friendly web applications using .NET, ReactJs, and NodeJs, C++ etc. Beyond my professional journey, personal projects like Roomz.com and Airline Reservation reflect my authentic love for coding.
                        <br/>
                        <br/>
                        Currently seeking opportunities as a software developer/engineer, I'm eager to collaborate, learn, and make a meaningful impact with an insatiable thirst for knowledge.
                    </p>
                </div>
                <div className="education">
                    <h6>Atria Institute Of Technology</h6>
                    <p>2014 - 2018 | Bengaluru <br/>
                    Electronics & Communication Engineering</p>
                </div>
            </div>
        </div>
    )
}

export default About;

