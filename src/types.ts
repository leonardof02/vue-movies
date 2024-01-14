export interface Movie {
    Title: string,
    Year: string,
    Poster: string,
    Ratings: [{ Value: string }]
    Plot: string,
    Response: "True" | "False"
}