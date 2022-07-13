function map(array, func) {
  if (!Array.isArray(array)) return "Please pass an array";
  if (typeof func !== "function") return "Please pass a mapping function";
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]))
  }
  return result
}

function filter(array, func) {
  if (!Array.isArray(array)) return "Please pass an array";
  if (typeof func !== "function") return "Please pass a filter function";
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result.push(array[i])
    }
  }
  return result
}


function every(array, func) {
  if (!Array.isArray(array)) return "Please pass an array";
  if (typeof func !== "function") return "Please pass an every function";
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      count += 1
    }
  }
  if (count === array.length) {
    return true
  } else {
    return false
  }
}


function some(array, func) {
  if (!Array.isArray(array)) return "Please pass an array";
  if (typeof func !== "function") return "Please pass a some function";

  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return true
    }
  }
  return false
}

function find(array, func) {
  if (!Array.isArray(array)) return "Please pass an array";
  if (typeof func !== "function") return "Please pass a find function";
  // let count = 0
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return array[i]
    }
  }
  return undefined
}

function reduce(array, func, intiate) {
  if (!Array.isArray(array)) return "Please pass an array";
  if (typeof func !== "function") return "Please pass a reduce function";

  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    result = func(result, array[i])
  }
  return intiate + result
}


// function flat(array, depth = 1) {
//   if (depth > 0) {
//     return array.reduce((acc, val) => {
//       return acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val)
//     }, [])

//   }
//   else {
//     return array
//   }
// };

function flat(array, depth = 1) {
  if (depth > 0) {
    return array.reduce((acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(flat(val, depth - 1))
      } else {
        return acc.concat(val)
      }
    }, [])
  }
  else {
    return array
  }
};

