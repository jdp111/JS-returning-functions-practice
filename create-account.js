
function Account(pin,amount){
    this.pin=pin
    this.amount = amount

}


Account.prototype.checkBalance = function(pin){
    if(this.pin == pin) return `$${this.amount}`
    return "Invalid PIN."
}

Account.prototype.deposit = function(pin,amt){

    if (this.pin == pin){
        this.amount += amt;
        return `Succesfully deposited $${amt}. Current balance: $${this.amount}.`
    }
    return "Invalid PIN.";
}

Account.prototype.withdraw = function(pin, amt){
    if(this.pin != pin){
        return "Invalid PIN."
    }
    if (this.amount < amt) return "Withdrawal amount exceeds account balance. Transaction cancelled."
    this.amount -= amt
    return `Succesfully withdrew $${amt}. Current balance: $${this.amount}.`
}

Account.prototype.changePin = function(pin,newPin){

    if (this.pin == pin){
        this.pin = newPin
        return "PIN successfully changed!"
    }
    return "Invalid PIN.";
}


function createAccount(pin, amount=0) {
   return new Account(pin, amount)
}



module.exports = { createAccount };
