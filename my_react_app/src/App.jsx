import MovieCard from "./components/MovieCard"


const movies = [
  {
    id: 1,
    title: "Pushpa 2",
    genre: "Action, Drama",
    rating: 8.2,
    duration: "3h 20m",
    language: "Hindi",
    img: "https://placehold.co/180x250?text=Pushpa+2"
  },
  {
    id: 2,
    title: "Stree 2",
    genre: "Horror, Comedy",
    rating: 7.9,
    duration: "2h 15m",
    language: "Hindi",
    img: "https://placehold.co/180x250?text=Stree+2"
  },
  {
    id: 3,
    title: "Kalki 2898 AD",
    genre: "Sci-Fi, Action",
    rating: 7.5,
    duration: "3h 0m",
    language: "Hindi",
    img: "https://placehold.co/180x250?text=Kalki"
  },
  {
    id: 4,
    title: "Animal",
    genre: "Action, Thriller",
    rating: 7.1,
    duration: "3h 21m",
    language: "Hindi",
    img: "https://placehold.co/180x250?text=Animal"
  },
  {
    id: 5,
    title: "Jawan",
    genre: "Action",
    rating: 7.8,
    duration: "2h 49m",
    language: "Hindi",
    img: "https://placehold.co/180x250?text=Jawan"
  },
]

function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ margin: 0, color: "#f84464" }}>🎬 Now Showing</h2>
      </div>

      {/* Cards Row */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
            duration={movie.duration}
            language={movie.language}
            img={movie.img}
          />
        ))}
      </div>
      <MovieCard/>

    </div>
  )
}

export default App
