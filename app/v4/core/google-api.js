/* global google */
const BASEURL = "http://localhost:3000/connectionTime";

export default class GoogleApi {
  static search(from, to) {
    let params = `?from=${from}&to=${to}`;

    return fetch(BASEURL + params)
      .then(result => result.json())
      .then(data => {
        return data[0].duration;
      });
  }
}
