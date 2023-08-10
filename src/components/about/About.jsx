import React from 'react';
import './about.scss';
// import saffronBlueImage from '../../photos/colorfull.png'

const About = () => {
    return (
        <div id='aboutSection' className="aboutSection container">
            <div className="aboutePhoto col-lg-4 col-md-5 col-sm-7">
                <div className='photo'>
                    {/* <img src={saffronBlueImage} alt="nithin's"/> */}
                </div>
            </div>
            <div className="abouteText col-lg-8 col-md-7">
                <div className="name animateLeft">
                    <h3>Nithin Shetty</h3>
                    <h4>Software Developer | Signalling Engineer</h4>
                </div>
                <div className="text">
                    <p>
                        In the sitcom world of software development, I am the Chandler, bringing witty intelligence to coding. As a CBTC Verification engineer at Alstom, I take on the role of Ross, ensuring <span className='train'>trains</span> run smoothly. My passion for coding is Joey-level, and with every line of code, I create a Phoebe-like symphony. Like Monica's precision, I craft elegant solutions while staying trendy like Rachel. My enthusiasm, akin to Joey's laughter, is contagious, inspiring the team around me. In this "Friends" of coding, I am destined to be the Ross and Rachel, making an extraordinary impact!
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

