import RouterView from './router/router-view';
import SearchView from './search/search';
import MoviesView from './movies/movies';
import router from './router/router';

class AppRoot extends HTMLElement {
  createdCallback() {
    this.render();
    
    router.configure(config => {
        config.map([
          { route: "search",  component: SearchView },
          { route: "movies",  component: MoviesView }
        ]);
    });

    router.navigate("search");
  }
  
  render() {
    this.innerHTML = `
      <router-view></router-view>
    `;
  }
}

export default document.registerElement('app-root', {
	prototype: AppRoot.prototype
});