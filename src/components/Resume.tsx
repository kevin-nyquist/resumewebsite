import resume from '../assets/Resume.pdf'
import '../css/Resume.css'

function Resume() {
    return (
        <div className="resume">
            <object className="res-object" data={resume}>
                <p>Unable to display PDF file. <a href={resume}>Download</a> instead.</p>
            </object>
        </div>
    )
}

export default Resume;