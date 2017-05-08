const devEndpoint = 'http://localhost:8080';

const createPath = path => `${devEndpoint}/${path}`;

export async function getVODMovies(page) {
  return fetch(createPath(`movies/${page}`))
    .then(response => response.json())
    .then(({ docs }) => docs.filter(object => object));
}

export async function login(username, password) {
  return fetch(createPath('login'), {
    method: "POST",
    body: { username, password }
  }).then(response => response.json())
}
