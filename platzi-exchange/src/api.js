const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`, { mode: 'cors' })
    .then((res) => res.json())
    .then((res) => res.data)
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`, { mode: 'cors' })
    .then((res) => res.json())
    .then((res) => res.data)
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`,
    { mode: 'cors' }
  )
    .then((res) => res.json())
    .then((res) => res.data)
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`, { mode: 'cors' })
    .then((res) => res.json())
    .then((res) => res.data)
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`, { mode: 'cors' })
    .then((res) => res.json())
    .then((res) => res.data)
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
}
