let url = 'https://jsonplaceholder.typicode.com/posts'
const path = 'db.json'

const sendData = (url, data) => {
return fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => console.log(response))
  .catch(error => console.log(error));

}

const getData = (path) => {
  return fetch(path)
    .then(response => response.json())
} 



  

