const API_KEY = "596ba8d3";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function getMovieByTitle(title: string) {
    try {
        const response = await fetch(`${ BASE_URL }&t=${title}`);
        const movie = await response.json();
        return movie;
    }
    catch( err ) {
        console.log("ERROR:", err);
    }
}