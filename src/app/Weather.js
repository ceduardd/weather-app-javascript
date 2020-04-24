export class Weather {

    constructor(city, countryCode) {
        this.apikey = 'f75decd82fb40528b04e6693e39f6baf'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`

        const response = await fetch(URL)
        const data = await response.json()
        return data
    }

    changeLocation(city, countryCode) {
        this.city = city
        this.countryCode = countryCode
    }
}