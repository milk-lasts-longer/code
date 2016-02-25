import MovieTile from '../movie-tile/movie-tile';

class MoviesView extends HTMLElement {
  createdCallback() {
    this.render({
      "movies": [{
        "omdbImgUrl": "/app/movie-thumbnails/tt0080684.jpg",
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "imdbVotes": "8.8",
        "runtimeOriginal": "124 min"
      }, {
        "omdbImgUrl": "/app/movie-thumbnails/tt0133093.jpg",
        "title": "The Matrix",
        "imdbVotes": "8.7",
        "runtimeOriginal": "136 min"
      }, {
        "omdbImgUrl": "/app/movie-thumbnails/tt0109707.jpg",
        "title": "Ed Wood",
        "imdbVotes": "7.9",
        "runtimeOriginal": "127 min"
      }]
    });
  }

  render(data) {
    this.innerHTML = `
      <div class="movies-container">
        ${data.movies.map(this.renderMovie).join("")}
      </div>
    `;
  }

  renderMovie(movie) {
    return `
      <movie-tile
        image-url="${movie.omdbImgUrl}"
        title="${movie.title}"
        runtime="${movie.runtimeOriginal}"
        rating="${movie.imdbVotes}">
      </movie-tile>
    `;
  }
}

export default document.registerElement('movies-view', {
  prototype: MoviesView.prototype
});
