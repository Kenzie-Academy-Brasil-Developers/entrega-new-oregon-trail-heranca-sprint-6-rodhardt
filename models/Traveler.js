class Traveler {
    
    constructor(name) {
        this._name = name
        this._foodQuantity = 1
        this._isHealthy = true
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }

    get foodQuantity() {
        return Number(this._foodQuantity)
    }

    set foodQuantity(value) {
        this._foodQuantity = Number(value)
        if (this._foodQuantity < 0) {
            this._foodQuantity = 0
        }
    }

    get isHealthy() {
        if (this._isHealthy === "true") {
            return true
        }
        if (this._isHealthy === "false") {
            return false
        }
        return this._isHealthy
    }

    set isHealthy(boolean) {
        this._isHealthy = boolean
        if (boolean === "true") {
            this._isHealthy = true
        }
        if (boolean === "false") {
            this._isHealthy = false
        } 
    }

    hunt = () => {
        this.foodQuantity += 2
    }
    eat = () => {
        if (this.foodQuantity === 0) {
            this.isHealthy = false
        }
        if (this.foodQuantity > 0) {
            this.foodQuantity--
        }
    }

}

module.exports = Traveler;