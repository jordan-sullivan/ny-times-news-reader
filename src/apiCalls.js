//API Key: g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ
// article search /articlesearch.json?q={query}&fq={filter}

const fetchTopTen = () => {
return fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ")
    .then((response) => {
    if (response.ok) {
        return response.json()
    } else {
        throw Error(response.status.toString())
    }
})
}

const fetchMostShared = () => {
return fetch("https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ")
    .then((response) => {
    if (response.ok) {
        return response.json()
    } else {
        throw Error(response.status.toString())
    }
})
}




export { fetchTopTen, fetchMostShared }