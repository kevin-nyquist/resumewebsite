import reactLogo from '../features/Home/assets/react.svg'
import '../css/App.css'
import Resume from '../components/Resume'
import AboutMe from '../features/Home/components/AboutMe'


function Home() {
    return (
        <div className="App">
            <AboutMe></AboutMe>
            <div className="down-arrow"></div>
                <div className='resume-container'>
                    <h2 className='res-title'>Resume:</h2>
                    <Resume></Resume>
                </div>
                <div className='bottom-banner'>
                    <h2> Built using React </h2>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </div>
    )
}

export default Home