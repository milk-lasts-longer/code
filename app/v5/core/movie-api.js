/* global fetch */
const BASEURL = "http://localhost:3000/moviesByTime";

export default class MovieApi {
    static searchByDuration(duration) {
        let fromDuration = parseInt(duration, 10) * 0.8;
        let params = `/${duration}`;

        return fetch(BASEURL + params)
          .then(result => result.json())
          .then(data => {
            return data;
          });
    }
}
