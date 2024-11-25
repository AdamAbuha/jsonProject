let movies = [
  {
    title: "Memento",
    image: "memento.jpg",
    rating: "9.4/10",
    description: "My favorite Christopher Nolan film that confused the hell out of me."
  },
  {
    title: "Trainspotting",
    image: "trainspotting.jpg",
    rating: "9.0/10",
    description: "My favorite soundtrack for any movie ever made."
  },
  {
    title: "Sunshine",
    image: "sunshine1.jpg",
    rating: "9.6/10",
    description: "My favorite sci-fi film and cast of any movie."
  },
  {
    title: "The Banshees of Inisherin",
    image: "banshees.jpg",
    rating: "9.5/10",
    description: "My biggest surprise of a movie I've ever watched."
  }
];

let movieGrid = document.getElementById("movie-grid");

for (let i = 0; i < movies.length; i++) {
  var movie = movies[i];

  var movieCard = document.createElement("div");
  movieCard.classList.add("card");

  movieCard.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="card-content">
      <h3>${movie.title}</h3>
      <p class="rating">${movie.rating}</p>
      <p>${movie.description}</p>
    </div>
  `;

  movieGrid.appendChild(movieCard);
}
