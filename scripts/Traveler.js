class Traveler { 
    constructor(name) { 
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () { 
        return this.food += 2
        
    }
    eat () { 
        if (this.food === 0) { 
            return this.isHealthy = false
        }else if (this.food >=1){
            this.food -= 1
            return this.isHealthy = true
        }
    }
}

class Doctor extends Traveler { 
    constructor(name) { 
        super(name)
    }
    heal(traveler) { 
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler { 
    constructor(name) { 
        super (name)
        this.food = 2
    }
    hunt (){ 
        return this.food += 5
    }
    eat () { 
        if (this.food < 2) { 
            this.food = 0
            this.isHealthy = false
        } else { 
            return this.food -= 2
        }
    }
    giveFood (traveler, numOfFoodUnits) { 
        this.numOfFoodUnits = numOfFoodUnits
        if (this.food < numOfFoodUnits) { 
            console.log('food not added')
        }else { 
            traveler.food += numOfFoodUnits
            this.food -=numOfFoodUnits
        }
    }
}
