function MovieCard({ title, genre, rating, duration, img, language }) {
  return (
    <div style={{
      width: "180px",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
    }}>
      {/* Poster */}
      <img
        src={img}
        alt={title}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />

      {/* Info */}
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: "0 0 4px 0", fontSize: "14px" }}>{title}</h4>
        <p style={{ margin: "0 0 2px 0", fontSize: "12px", color: "#888" }}>{genre}</p>
        <p style={{ margin: "0 0 2px 0", fontSize: "12px", color: "#888" }}>{language} • {duration}</p>
        <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#f84464", fontWeight: "bold" }}>⭐ {rating}/10</p>
      </div>
    </div>
  )
}

export default MovieCard
