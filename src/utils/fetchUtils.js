/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

function getMethod() {
  return {
    method: 'GET',
  };
}

function postMethod(data) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}

export function getFetch(url) {
  fetch(url, getMethod())
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        reject('TIME_OUT')
      }
    })
    .then(json => {
      resolve(json.data)
    })
    .catch(error => {
      console.log(error);
      reject(error)
    });
}
