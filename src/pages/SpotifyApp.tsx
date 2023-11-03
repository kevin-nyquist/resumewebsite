import { useEffect } from 'react'
import '../css/Spotify.css'

function SpotifyApp() {
    useEffect(() => {
        const script = document.createElement("script")
    
        script.src =
            "src/features/SpotifyApp/script.ts"

        script.async = true
        
        script.type="module"
    
        document.body.appendChild(script)
    
        return () => {
            // clean up the script when the component is unmounted
            document.body.removeChild(script)
        }
        }, [])
    return (
        <div className="App">

            {/* <h1>Display your Spotify profile data</h1>
            <section id="profile">
            <h2>Logged in as <span id="displayName"></span></h2>
            <span id="avatar"></span>
            <ul>
                <li>User ID: <span id="id"></span></li>
                <li>Email: <span id="email"></span></li>
                <li>Spotify URI: <a id="uri" href="#"></a></li>
                <li>Link: <a id="url" href="#"></a></li>
                <li>Profile Image: <span id="imgUrl"></span></li>
            </ul>
            </section> 
            <div>
                <h1>Top 5 Tracks Right Now:</h1>
                <ul>
                    <p></p>
                </ul>
            </div>
            */}

            <h1>Featured Artist:</h1>
            <iframe className="featured_artist" src="https://open.spotify.com/embed/artist/1uR7zoLrSRI8bSL43OZ0GY?utm_source=generator" 
            width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; 
            picture-in-picture" loading="lazy"></iframe>
        </div>
    )
}

export default SpotifyApp