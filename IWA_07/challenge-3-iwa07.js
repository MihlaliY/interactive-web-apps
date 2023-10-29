const leoName = "Leo"
const leoSurname = "Musvaire     "
const leoBalance = "-9394"

const sarahName = "Sarah    "
const sarahSurname = "Kleinhans"
const sarahBalance = "-4582.2"

const divider = "----------------------------------"

// Only change below this line

let owed = `${(
  parseFloat(leoBalance * -1) + parseFloat(sarahBalance * -1)
).toFixed(2)}`

owed = `R ${owed.toLocaleString()}`

const leo = `${leoName} ${leoSurname.replaceAll(" ", "")} (Owed: R ${parseFloat(
  leoBalance * -1
).toFixed(2)})`
const sarah = `${sarahName.replaceAll(
  " ",
  ""
)} ${sarahSurname} (Owed: R ${parseFloat(sarahBalance * -1).toFixed(2)})`

const total = "Total amount owed: "

const result = `

${leo}
${sarah} 
 
${divider}
  ${total} ${owed} 
${divider}`

console.log(result)
