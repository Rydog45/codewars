//The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.
function dateNbDays(a0, a, p) {
    const startingDate = new Date('2022-01-03')
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