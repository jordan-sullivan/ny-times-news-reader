//API Key: g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ

const fetchTopStories = (topic) => {
return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=g0iIp2fZh3Hy7ztGZuCLlgPtuR8ysniZ`)
    .then((response) => {
    if (response.ok) {
        return response.json()
    } else {
        throw Error(response.status.toString())
    }
})
}





export { fetchTopStories }