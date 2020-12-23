function imprimir(cosa) {
  screener.setAttribute('src', cosa)
}
const screener = document.getElementById('screener')

fetch('https://crafatar.com/avatars/5eed208d-de58-4022-9ba7-6ccb5ea7e92a')
  .then(response => response.url)
  .then(data => imprimir(data))



