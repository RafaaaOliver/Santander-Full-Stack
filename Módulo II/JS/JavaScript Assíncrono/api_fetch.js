// método GET:

fetch('URL aqui', {
    method: 'GET', 
    cache: 'no-cache',})
.then(response => response.json())
.then(json => console.log(json))

// método POST:

fetch('URL aqui', {
    method: 'GET',
    cache: 'no-cache',
    body: JSON.stringify(data)})
.then(response => response.json())
.then(json => console.log(json))