const axios = require('axios')
const api_key = process.env.WEATHER_API_KEY

exports.handler = async function (event, context, callback) {
    const { lat, lon } = event.queryStringParameters
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    const response = await axios.get(endpoint)
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
    })
}
