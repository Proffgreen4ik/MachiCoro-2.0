class Cube {
    constructor(attempts = 1,cards) {
        this.attempts = attempts
        this.cards = cards
    }
    attemptsUpper (cards) {
        if (cards.includes('')) {
            this.attempts +=1
        }
        return attempts
    }
    beThrown(attempts) { 
        let sum = 0
        for (let i=0;i<attempts;i++) {
            sum += getRandomInt(1,7)
        }
        return sum
    }
  }
