import axios from "axios"
export const weatherService = {
    getWeather,
}

async function getWeather(location) {
    const results = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=920bce1d07e3442ba5b111019220409&q=${location}&days=5&aqi=no&alerts=no`)
    // const options = {
    //     method: 'GET',
    //     url: 'https://bing-image-search1.p.rapidapi.com/images/search',
    //     params: {q: location},
    //     headers: {
    //       'X-RapidAPI-Key': '42a06de15dmsh1c9492644c18f3bp1d328cjsn903bdb12e321',
    //       'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options).then(function (response) {
    //       console.log(response.data);
    //   }).catch(function (error) {
    //       console.error(error);
    //   });
    const data = setData(results.data)
    return Promise.resolve(data)
}

function setData({ forecast, location }) {
    return (
        {
            name: location.name,
            days: forecast.forecastday.map((day) => {
                return (
                    {
                        date: day.date,
                        tempC: day.day.avgtemp_c,
                        tempF: day.day.avgtemp_f,
                        condition: {
                            text: day.day.condition.text,
                            icon: day.day.condition.icon,
                        }
                    }
                )
            })
        }
    )
}



