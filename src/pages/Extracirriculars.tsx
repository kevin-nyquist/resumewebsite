//import './css/Projects.css'
import lacrosse from '../assets/lacrosse.jpeg'
import ccpm from '../assets/CCMP.jpeg'
import atc from '../assets/ATC.jpeg'


function Extracirriculars() {
    return (
    <div className="projects-page">
        <div className="project-container">
            <div className='proj-pic'>
                <img src={lacrosse} alt="Image Failed to Load"></img>
            </div>
            <div className="description">
                <h2>
                    Offensive Coordinator UGA Men's Club Lacrosse
                </h2>
                <p>
                    Serve as the current offensive coordinator, leading team strategy and setting team goals. 
                </p>
                <p>
                    Former Event Coordinator and Captain (2022-2023) where I led team events, aquired team sponsorships, and 
                    independently managed a travel budget exceeding $35,000 and organized cross-country team travel. In Spring of
                    2023 after a 13-1 season we successfully made it to the second round of the final tournament in Round Rock, TX, 
                    having not been to the tournament in over 10 years. 
                </p>
            </div>
        </div>
        <div className="project-container">
            <div className='proj-pic'>
                <img src={ccpm} alt="Image Failed to Load"></img>
            </div>
            <div className="description">
                <h2>
                    Student Mentor: Clarke County Mentor Program
                </h2>
                <p>
                    Clarke County Mentor Program connects mentors with students within Athens-Clarke county to provide
                    mentorship advice and tutoring to students seeking guidance.
                    <a href="https://www.clarkecountymentorprogram.org/"></a>
                </p>
                <p>
                    I've been a part of the program since my Freshman year at UGA, seeking to inspire my mentees to 
                    dream big and work hard to achieve their goals. For more information visit their website: 
                    <a href="https://www.clarkecountymentorprogram.org/">Clarke Country Mentor Program</a>
                </p>
            </div>
        </div>
        <div className="project-container">
            <div className='proj-pic'>
                    <img src={atc} alt="Image Failed to Load"></img>
            </div>
                <div className="description">
                    <h2>
                        Student Volunteer: Athens Technical College ESL Courses
                    </h2>
                    <p>
                        Athens Technical College offers English as a Second Language (ESL) courses teaching English to non-native 
                        speakers. I had the opportunity to volunteer assisting to teach Spanish speaking students English at a variety 
                        of levels.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Extracirriculars