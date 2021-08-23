const Traveler  = require("./Traveler");

class Hunter extends Traveler {

    constructor(name) {
        super(name)
        this._foodQuantity = 2
    }

    hunt = () => {
        this.foodQuantity += 5
    }

    eat = () => {
        if (this.foodQuantity < 2) {
            this.foodQuantity = 0
            this.isHealthy = false
        }
        if (this.foodQuantity >= 2) {
            this.foodQuantity -= 2
        }
    }

    giveFood = (traveler, numOfFoodUnits) => {
        if (numOfFoodUnits > this.foodQuantity) {
            return `It's not possible to give any food`
        }
        traveler.foodQuantity += numOfFoodUnits
        this.foodQuantity -= numOfFoodUnits
        return `${this.name} gave ${numOfFoodUnits} food units to ${traveler.name}`
    }
}

module.exports = Hunter;