let state = "idle"
let user = null
let calculated = "1"

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === "numerical-string"
  const calculatedAsNumber = isString ? calculated : parseInt(calculated)
  return (calculated = calculatedAsNumber + 1)
}

logCalc()

const calcUser = () => {
  if (logCalc(calculated) >= 2) {
    user = "John"
    state = "requesting"
  } else if (logCalc(calculated) >= 3) {
    state = "idle"
  }

  return `${user} ${state}`
}

calcUser()

const checkUser = () => {
  if (user === "John" && state === "requesting") {
    console.log(`User: ${user} (${calculated})`)
  }
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
