// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response)) // .json is not similer but close to JSON.parse
    //   .then(json => console.log(json))


// structure:
// const url = 'https://jsonplaceholder.typicode.com/todos/1' ;
// fetch(url) 
//     .then(promise => promise.json()) 
//     .then(get => console.log(get))

function loadData(){
const url = 'https://jsonplaceholder.typicode.com/todos/1' ;
fetch(url) 
    .then(promise => promise.json()) 
    .then(get => console.log(get))
} 