import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './project.scss';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_PLAYLIST_ID = process.env.REACT_APP_PLAYLIST_ID;

const Project = () => {
    const [ytData, setYtData] = useState([]);

    useEffect(() => {
        const projectData = async () => {
            try {
                var response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${REACT_APP_PLAYLIST_ID}&key=${REACT_APP_API_KEY}`)
                setYtData(response.data.items);
            }
            catch(error) {
                console.log("Error while fetching the data from the YouTube :", error);
            }
        }

        projectData();
    }, []);

    return (
        <div id='projectSection' className="project">
            <h3>Projects</h3>
            <div className='cards'>
                {ytData.map((video) => (
                    <div className="projectCard" key={video.id}>
                        <iframe src={`https://www.youtube.com/embed/${video.contentDetails.videoId}?loop=1&autoplay=1&mute=1`} title={video.snippet.title} allowFullScreen></iframe>
                        <div className="details">
                            <h5>{video.snippet.title}</h5>
                            <div>
                                <a href={video.snippet.description}>Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;
                



                // <div className="projectCard">
                //     <div class="video">
                //         <iframe src={video.contentDetails.videoId} frameborder="0" allowfullscreen></iframe>
                //     </div>
                //     <div className="aboutIcon" onClick={toggleDescription}>
                //         <span>{video.snippet.title}</span>
                //     </div>
                //     {showDescription && (
                //         <div className="projectDescription">
                //             <p>This is the project description.</p>
                //         </div>
                //     )}
                // </div>