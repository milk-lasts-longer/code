import MovieApi from '../core/movie-api';
import MovieTile from '../movie-tile/movie-tile';

class MoviesView extends HTMLElement {
  createdCallback() {
    console.log('MovieApi fetch hardcoded to 3420s')
    MovieApi.searchByDuration(3420).then(data => this.render(data));
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
        imdb-url="${movie.imdbUrl}"
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
