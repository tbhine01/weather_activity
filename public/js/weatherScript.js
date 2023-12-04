function getWeather(){
    const cityInput = document.getElementById("city_choice").value

    fetch(`/weather/${cityInput}`)
    .then((response) => {
        return response.json()
    })

    .then((data) => {
        console.log(data)

         
        // const weatherContainer = document.getElementById("weather_info")
        // const weatherCard = document.getElementsByClassName("weather_card")
        // const conditionCard = document.getElementsByClassName("condition_card")

        const city = document.getElementsByClassName("city")
        const temp = document.getElementById("temp")
        const condition = document.getElementsByClassName("condition")
        const precip = document.getElementsByClassName("precip")

        // conditionCard.classList.add("condition_card")
        // weatherCard.classList.add("weather_card")

        // const city = document.createElement("h4")
        // const temp = document.createElement("h1")
        // const condition = document.createElement("h3")
        // const precip = document.createElement("h5")

        // city.classList.add("city")
        // condition.classList.add("condition")
        // precip.classList.add("precip")

        city[0].innerText = `📍${data.city}`

        if(data.condition == "Sunny"){
            condition[0].innerHTML = "☀️"
        }else if(data.condition == "Cloudy"){
            condition[0].innerHTML = "⛅️"
        }else if(data.condition == "Snowy"){
            condition[0].innerHTML = "🌨️"
        }
        
        temp.innerText = `${data.temp}°`
        precip[0].innerText = `${data.precipitation} precipitation`
        
        // conditionCard.appendChild(temp)
        // conditionCard.appendChild(condition)

        // weatherCard.appendChild(city)
        // weatherCard.appendChild(conditionCard)
        // weatherCard.appendChild(precip)

        // weatherContainer.appendChild(weatherCard)
    })

    .catch((error) => {
        console.log(error)
    })

}

