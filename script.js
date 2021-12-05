let url = 'https://jsonplaceholder.typicode.com/posts'
const path = 'db.json'

const sendData = (url,data) => {
return fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json; charset=UTF-8',
  }
}).then(response => response.json())
}

const getData = (pathData) => {
  return fetch(pathData)
    .then(response => response.json())
} 

getData(path).then(data => {
  sendData(url, data)
      .then(response => console.log(response))
      .catch(error => console.log(error))

})

  .catch(error => console.log(error))



  

