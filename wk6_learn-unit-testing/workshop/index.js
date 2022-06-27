// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

const searchParamsToObject = (str) => {
  const param = new URLSearchParams(str)
  return Object.fromEntries(param)
}

