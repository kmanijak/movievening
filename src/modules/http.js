import X2JS from 'x2js';
const devEndpoint = 'http://localhost:8080';

const createPath = path => `${devEndpoint}/${path}`;

export async function getVODMovies(page) {
  return fetch(createPath(`movies/${page}`))
    .then(response => response.json())
    .then(({ docs }) => docs.filter(object => object));
}

export async function getUsersData() {
  const x2js = new X2JS();

  return fetch('https://api.bamboohr.com/api/gateway.php/grandparade/v1/employees/directory', {
    headers: {
      'Authorization': `Basic ${btoa('6fed893143cf460d91f9d06ebd52623d12baceb0:x')}`
    }
  })
    .then(resp => resp.text())
    .then(xml => x2js.xml2js(xml))
    .then(body => console.log(body));
}
