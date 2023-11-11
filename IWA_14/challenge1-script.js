const firstName = "John"
const age = 35
const hobby = "Coding"

const logTwice = (name, age, hobby) => {
  console.log(`Hello, ${name} (${age}). I love ${hobby.toLowerCase()}!`)
  console.log(`Hello, ${name} (${age}). I love ${hobby.toLowerCase()}!`)
}

logTwice(firstName, age, hobby)
