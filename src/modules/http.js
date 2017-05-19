const devEndpoint = 'http://localhost:8080';

const createPath = path => `${devEndpoint}/${path}`;

export async function getVODMovies(page) {
  return fetch(createPath(`movies/${page}`))
    .then(response => response.json())
    .then(({ docs }) => docs.filter(object => object));
}

export async function login(email, password) {
  return fetch(createPath('login'), {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(user => user);
}

export async function logout() {
  return fetch(createPath('logout'), {
    method: 'POST',
  })
    .then(response => response.text())
    .then(resp => resp);
}
