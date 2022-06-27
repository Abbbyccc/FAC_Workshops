// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

const searchParamsToObject = (str) => {
  const param = new URLSearchParams(str)
  return Object.fromEntries(param)
}

const isLeapYear = (yr) => {
  if (yr < 0) {
    return 'Please enter a positive number'
  } else if (typeof yr !== 'number') {
    return 'Please enter type number only'
  } else if (yr % 100 == 0) {
    return false
  } else if (yr % 4 === 0 || yr % 400 === 0) {
    return true
  }
}