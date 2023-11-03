const currentYear = new Date().getFullYear()

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment
console.log(
  holidays[futureId]
    ? holidays[futureId].name
    : `ID ${futureId} not created yet
`
)

const copied = {...holidays[christmas]}
copied.name = "X-mas"

console.log(copied, holidays)

const correctDate = new Date(`25 December ${currentYear}`)
correctDate.setHours(0)
correctDate.setMinutes(0)
isEarlier = correctDate < holidays[christmas].date

console.log("New date is earlier:", isEarlier)

if (isEarlier) {
  copied.date = correctDate
  console.log("ID change:", holidays[christmas].id !== copied.id)
  console.log(
    "Name change:",
    holidays[christmas].name === copied.name || copied.name
  )

  console.log(
    "Date change:",
    holidays[christmas].date === copied.date ||
      `${copied.date.getDate()}/${
        copied.date.getMonth() + 1
      }/${copied.date.getFullYear()}`
  )
}

const firstHolidayTimestamp = Math.min(
  (holidays[0].date = new Date(`16 December ${currentYear}`)).getDate(),
  holidays[1].date.getDate(),
  holidays[2].date.getDate(),
  holidays[3].date.getDate(),
  holidays[4].date.getDate(),
  holidays[5].date.getDate(),
  holidays[6].date.getDate(),
  holidays[7].date.getDate(),
  holidays[8].date.getDate()
)

const lastHolidayTimestamp = Math.max(
  (holidays[0].date = new Date(`16 December ${currentYear}`)).getDate(),
  holidays[1].date.getDate(),
  holidays[2].date.getDate(),
  holidays[3].date.getDate(),
  holidays[4].date.getDate(),
  holidays[5].date.getDate(),
  holidays[6].date.getDate(),
  holidays[7].date.getDate(),
  holidays[8].date.getDate()
)

const firstDay = holidays[3].date.getDate().toString().padStart(2, 0)
const firstMonth = (holidays[3].date.getMonth() + 1).toString().padStart(2, 0)

const lastDay = holidays[2].date.getDate()
const lastMonth = holidays[2].date.getMonth() + 1

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomKey = Math.floor(Math.random() * Object.keys(holidays).length) //gets random number from 0 to 9 (zero inclusive but 9 excluive) rounded down to a whole number
const randomHoliday = holidays[randomKey]

console.log(
  `${randomHoliday.date.getDate().toString().padStart(2, 0)}/${(
    randomHoliday.date.getMonth() + 1
  )
    .toString()
    .padStart(2, 0)}/${randomHoliday.date.getFullYear()}`
)
