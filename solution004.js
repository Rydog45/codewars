
//You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.
//The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a. 

function dateNbDays(a0, a, p) {
    const startingDate = new Date('1-1-16')
    const dailyInterestRate = p / 36000
    let startingMoney = a0
    let daysPassed = 0
    
    while (startingMoney < a) {
      daysPassed++
      startingMoney += startingMoney * dailyInterestRate
    }
    startingDate.setDate(startingDate.getDate() + daysPassed)
    return startingDate.toISOString().split('T')[0]
  }
