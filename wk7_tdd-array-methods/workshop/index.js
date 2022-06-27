function map(array, func) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]))
  }
  return result
}

function filter(array, func) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result.push(array[i])
    }
  }
  return result
}
