import GoogleApi from '../core/google-api';

class SearchView extends HTMLElement {
  createdCallback() {
    this.render();
    this.addEventListener('submit', this.search);
  }

  search(e) {
    e.preventDefault();

    let from = this.querySelector('input[name="from"]').value;
    let to = this.querySelector('input[name="to"]').value;

    GoogleApi.search(from, to).then(duration => {
      // what next?
			console.log(`open movies with duration ${duration}`);
    });
  }

  render() {
    this.innerHTML = `
        <div class="search">
            <h1>MOVIE on the TRAIN</h1>
            <p>Enter your train route and we tell you which movie to watch</p>
            <form>
                <input name="from" type="text" placeholder="from" required>
                <input name="to" type="text" placeholder="to" required>
                <button type="submit">Movietime!</button>
            </form>
        </div>
    `;
  }
}

export default document.registerElement('search-view', {
  prototype: SearchView.prototype
});
