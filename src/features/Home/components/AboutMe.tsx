import './AboutMe.css'
import photo from '../assets/prof-photo.jpeg'

function AboutMe() {
    return (
        <div className="bio-container">
            <div className="image-container">
                <img className="prof-photo" src={photo} alt="Image Failed to Load"></img>
                <h1>Kevin Nyquist</h1>
            </div>
            <div className="bio">
                <p>
                    Hello, I'm a graduate student graduating in May 2024 from the University of Georgia. 
                    I'm currently pursuing a role as a Software Engineer starting June 2024. 
                </p>
                <p>
                    In my free time I enjoy hiking, cooking, woodworking, and photography (Like this one in the background).
                </p>
            </div>
        </div>
    )
}

export default AboutMe;