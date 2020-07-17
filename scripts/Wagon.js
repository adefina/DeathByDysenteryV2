class Wagon { 
    constructor (capacity) { 
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount () { 
        return this.capacity - this.passengers.length
    }
    join(traveler) { 
        if (this.getAvailableSeatCount(this.passengers) === 0) { 
            console.log('There is not enough space!')
        } else {
            this.passengers.push(traveler)
        }
    }
    //check all passengers' isHealthy status 
    //if only one is unhealthy (false) return true 
    shouldQuarantine() {
        if (this.passengers.some(passengers => passengers.isHealthy === false)) {
            return true
        } else { 
            return false
        }
        
    }
    //check all passengers' food number 
    //total all food between all passengers
    totalFood () {              //whole section needs attention 
        let foodOnly = this.passengers.map(passenger => passenger.food)
            console.log(foodOnly)
            // let food = 0
            // for (let counter = 0; counter <= foodOnly.length; counter++) { 
            //     return food += foodOnly[counter]
            // }
            let sum = foodOnly.reduce(function(a,b) { 
                return a+b
            },0)
            return (sum)
    }
}