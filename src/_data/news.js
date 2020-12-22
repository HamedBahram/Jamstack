require('dotenv').config()
const axios = require('axios')
const countries = require('./countries.json')

const apiKey = process.env.NEWS_API_KEY

async function getNews(country) {
    const endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=5`

    try {
        const response = await axios.get(endpoint)
        const news = response.data
        return {
            country,
            articles: news.articles,
        }
    } catch (error) {
        console.error(error)
    }
}

async function newsCollection() {
    const result = await Promise.all(countries.map(getNews))
    return result
}

module.exports = newsCollection
