const Traveler  = require("./Traveler");

class Wagon {
    constructor(capacity) {
        this._capacity = capacity
        this._passengers = []
    }

    get capacity() {
        return this._capacity
    }

    set capacity(value) {
        this._capacity = value
    }

    get passengers() {
        return this._passengers
    }

    set passengers(personArray) {

        this._passengers = personArray

    }

    getAvailableSeatCount = () => {
        return this.capacity - this.passengers.length
    }

    join = (travelerName) => {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(travelerName)
            // return `${travelerName} has joined the Wagon!`
        }
        return `There is no empty seats for ${travelerName}.`
    }

    shouldQuarantine = () => {
        let isSomeoneSick = false
        this.passengers.forEach((element) => {
            if (element.isHealthy === "false" || !element.isHealthy) {
                isSomeoneSick = true
            }
        })
        return isSomeoneSick
    }

    totalFood = () => {
        return this.passengers.reduce((acm, current) => {
            return acm + current.foodQuantity
        }, 0)
    }

}

module.exports = Wagon;