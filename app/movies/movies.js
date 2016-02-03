import MovieApi from '../core/movie-api';
import MovieTile from '../movie-tile/movie-tile';
import router from '../router/router';

class MoviesView extends HTMLElement {
  createdCallback() {
    let duration = location.hash.split('=').pop();
    
    if(duration) {
      MovieApi.searchByDuration(duration).then(data => this.render(data));
    } else {
      router.navigate("search");
    }
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
      <div is="movie-tile"
        imdb-url="${movie.imdbUrl}"
        image-url="${movie.omdbImgUrl}"
        title="${movie.title}"
        runtime="${movie.runtimeOriginal}"
        rating="${movie.imdbVotes}">
      </div>
    `;
  }
}

export default document.registerElement('movies-view', {
  prototype: MoviesView.prototype
});
