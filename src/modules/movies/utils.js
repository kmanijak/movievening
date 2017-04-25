const devEndpoint = 'http://localhost:8000';

export async function getVODMovies(site) {
  return fetch(`${devEndpoint}/movies?site=${site}`)
      .then(response => response.json())
      .then(response => response.filter(object => object));
}
