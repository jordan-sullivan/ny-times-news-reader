//API Key: g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ

const fetchTopStories = () => {
// return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ`)
return fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ")
    .then((response) => {
    if (response.ok) {
        return response.json()
    } else {
        throw Error(response.status.toString())
    }
})
}





export { fetchTopStories }