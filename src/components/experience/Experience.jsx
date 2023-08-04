import './experience.scss';

const Experience = () => {
    const list = [
        {
            id: 1,
            company: "Hitachi Rail STS",
            date: "Sept/2018 - Dec/2021",
            position: "Verification & Validation Engineer",
            location: "Noida, IN"
        },
        {
            id: 2,
            company: "Alstom",
            date: "Jan/2022 - Present",
            position: "CBTC Verification Engineer",
            location: "Bengaluru, IN"
        }
    ]    

    return (
        <div id='experienceSection' className="experienceSection">
            <h3>Experience</h3>
            <div className="experiences">
                {list.map((exp) => (
                    <div className="exp" key={exp.id}>
                        <span className="time">{exp.date}</span>
                        <h4 className="title">{exp.company}</h4> 
                        <h6>{exp.position} |  {exp.location}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;