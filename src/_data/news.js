require('dotenv').config()
const axios = require('axios')

const apiKey = process.env.NEWS_API_KEY
const endpoint = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-18&sortBy=publishedAt&apiKey=${apiKey}`

async function getNews() {
    try {
        const response = await axios.get(endpoint)
        const news = response.data
        return news
    } catch (error) {
        console.error(error)
    }
}

module.exports = getNews
