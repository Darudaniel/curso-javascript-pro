function imprimir(cosa) {
  screener.setAttribute('src', cosa)
}
const screener = document.getElementById('screener')

fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(data => imprimir(data.results[0].image))

// const nombrePj = data.results[0]



// /mnt/d/Descargas/elbabanano.jpg

