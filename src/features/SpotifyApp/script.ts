import { redirectToAuthCodeFlow, getAccessToken } from "./authentication/authCodeWithPkce";

const clientId = "22add4a864d44f1e92603a63e567fc2d";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    const personalized_tracks = await fetchTracks(accessToken);
    console.log(personalized_tracks);
    populateUI(profile, personalized_tracks);
    // populateUI(personalized_tracks);
} 

async function fetchProfile(token: string): Promise<UserProfile> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    console.log(token);
    return await result.json();
}

async function fetchTracks(token: string): Promise<Personalized_Tracks> {
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks?offset=5", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

function populateUI(profile: UserProfile, personalized_tracks: Personalized_Tracks) { //personalized_tracks: Personalized_Tracks
    
    document.getElementById("displayName")!.innerText = profile.display_name;
    if (profile.images[0]) {
        const profileImage = new Image(200, 200);
        profileImage.src = profile.images[0].url;
        document.getElementById("avatar")!.appendChild(profileImage);
    }
    document.getElementById("id")!.innerText = profile.id;
    document.getElementById("email")!.innerText = profile.email;
    document.getElementById("uri")!.innerText = profile.uri;
    document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url")!.innerText = profile.href;
    document.getElementById("url")!.setAttribute("href", profile.href);
    document.getElementById("imgUrl")!.innerText = profile.images[0]?.url ?? '(no profile image)';
    
    console.log(personalized_tracks.name);
    // document.getElementById("list")!.innerHTML += '<li>' + track + '</li>';
}

export { };
