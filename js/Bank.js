class Bank {
    constructor(money,howmuch) {
        this.money = money
        this.howmuch = howmuch
    }
    get giveMoney (money,howmuch,Player) {
        money -= howmuch
        return money
    }
}