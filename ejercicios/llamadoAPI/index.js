function imprimir(cosa) {
  screener.innerHTML =  cosa
}
const screener = document.getElementById('screener')

fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(data => imprimir(data.results[0].name))

// const nombrePj = data.results[0]





