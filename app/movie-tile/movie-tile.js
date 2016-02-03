class MovieTile extends HTMLLIElement {
  createdCallback() {
    this.classList.add("movie");
    this.render(this.attributes);
  }
  
  render(attrs) {
    this.innerHTML = `
        <img src="${attrs['image-url'].value}" alt="" onerror="this.src='http://placehold.it/343x200'" />
        <p class="title">${attrs['title'].value}</p>
        <p>${attrs['rating'].value} Rating</p>
        <p>${attrs['runtime'].value}</p>
    `;
  }
}

export default document.registerElement('movie-tile', {
  prototype: MovieTile.prototype,
  extends: 'div'
});