import '../css/Projects.css'
import platform from '../features/Projects/assets/SitS_platform.jpeg'

function Projects() {
    return (
    <div className="projects-page">
        <div className="project-container">
            <div className='proj-pic'>
                <img src={platform}></img>
            </div>
            <div className="description">
                <h2>
                    In-Situ Environmental Sensor Collection and Analytics Platform
                </h2>
                <h4>
                    Description
                </h4>
                <p>
                    The SitS system is an NSF-funded project aimed at creating a remote 
                    sensing platform that is able to collect and store environmental data 
                    without the need for outside power or network connections. The system 
                    would automate data collection, allowing for cheap and reliable access
                    to a large amount of environmental data like soil composition.
                </p>
                <h4>
                    Purpose
                </h4>
                <p>
                    This project aims to create a reliable and low-cost data collection 
                    method that requires limited researcher interaction. Currently, 
                    researchers have to manually take soil core samples to retreive
                    the data we are targeting, and this is ineffective for tracking 
                    long-term changes over time. We seek to create a large data set 
                     tracking changes in soil organic matter content in order to yeild 
                     a spacially and temporally significant data set that can be used
                     to determine the health of the environment.
                     
                </p>
                <h4>
                    Progress
                </h4>
                <p>Utilizing the FabLab at UGA we constructed the platform
                    that will be deployed in the saltwater marshland. The 
                    next steps will be testing the platform at a location in 
                    Athens, GA to ensure proper sensing operations and platform
                    stability. 
                </p>
            </div>
        </div>
        <div className="project-container">
            <div className='proj-pic'>
                <iframe className="figma" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl1KDACe5o4A8oKVqKu2lma%2FMilestone-3-Part-B%3Ftype%3Ddesign%26node-id%3D263%253A2%26t%3Dl8VfEwnCCR9MQVoN-1" allowFullScreen></iframe>
            </div>
            <div className="description">
                <h2>
                    UX Redesign RampantStrategy
                </h2>
                <h4>
                    Description
                </h4>
                <p>
                Educational technology is meant to aid in student learning and interaction with the instructor, but Rampant Strategy, a tool for educational technology, fails to facilitate communication effectively.
                In response to this, we created a new, accessible website experience to foster a collaborative learning environment and promote clear communication between instructor and student.
                    For futher detail check out the webiste:
                    <a href="http://kevin-nyquist@github.io/Human_Computer_Interaction_Research_Website/">HCI Project Website</a>
                </p>
            </div>
    </div>
    </div>
    )
}

export default Projects