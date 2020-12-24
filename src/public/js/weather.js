const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
}

function success(position) {
    const crd = position.coords
    const lat = crd.latitude
    const lon = crd.longitude
    const endpoint = `/.netlify/functions/weatherapi?lat=${lat}&lon=${lon}`
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('#city').textContent = data.name
            document.querySelector('#temp').textContent = `${data.main.temp} \u00B0C`
            document.querySelector('#desc').textContent = data.weather[0].description
            document.querySelector('#weather').classList.remove('hidden')
        })
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
}

navigator.geolocation.getCurrentPosition(success, error, options)
