// testing map()
//test if map() take an array and func as arguments
test("map() should contain two arguments array and fn", () => {
  equal(map(), "Please pass an array");
  equal(map([]), "Please pass a mapping function");
});

//test if map() return same length of array
test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => { });
  equal(result.length, 1);
});

//test if map() return the correct element after the function
test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

// testing filter()
//test if filter() take an array and func as arguments
test("filter() should contain two arguments array and fn", () => {
  equal(filter(), "Please pass an array");
  equal(filter([]), "Please pass a filter function");
});

test("filter() should return an array with the same number of elements", () => {
  const result = filter([1, 2, 3], (x) => x > 1);
  equal(result.length, 2);
});

test("filter() should transform each element of the array using the fn argument", () => {
  const result = filter([1], (x) => x < 1);
  equal(result.length, 0)
});

test("filter() should transform each element of the array using the fn argument", () => {
  const result = filter([1], (x) => x < 1);
  equal(result[0], undefined)
});


// testing every()
//test if filter() take an array and func as arguments
test("every() should contain two arguments array and fn", () => {
  equal(every(), "Please pass an array");
  equal(every([]), "Please pass an every function");
});


test("every() should return true if every element passes the condtion", () => {
  const result = every([1, 2, 3], (x) => x > 0);
  equal(result, true);
});

test("every() should return true if every element passes the condtion", () => {
  const result = every([1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 100], (x) => x < 100);
  equal(result, false);
});

// testing some()
//test if some() take an array and func as arguments
test("some() should contain two arguments array and fn", () => {
  equal(some(), "Please pass an array");
  equal(some([]), "Please pass a some function");
});


test("some() should return true if some element passes the condtion", () => {
  const result = some([1, 2, 3], (x) => x > 3);
  equal(result, false);
});

test("some() should return true if some element passes the condtion", () => {
  const result = some([4, 5, 6], (x) => x = 5);
  equal(result, true);
});

// testing find()
test("find() should contain two arguments array and fn", () => {
  equal(find(), "Please pass an array");
  equal(find([]), "Please pass a find function");
});

test("find() should return true the first element passes the condtion", () => {
  const result = find([4, 5, 6], (x) => x > 5);
  equal(result, 6);
});

test("find() should return true the first element passes the condtion", () => {
  const result = find([4, 5, 6], (x) => x > 8);
  equal(result, undefined);
});

// testing reduce()
test("reduce() should contain two arguments array and fn", () => {
  equal(reduce(), "Please pass an array");
  equal(reduce([]), "Please pass a reduce function");
});

test("reduce() should running the reducer function across all elements of the array, and return a value", () => {
  const result = reduce([1, 2, 3], (total, x) => total + x, 0);
  equal(result, 6);
});

test("reduce() should running the reducer function across all elements of the array, and return a value", () => {
  const result = reduce([1, 4, 3, 5], (total, x) => total - x, 0);
  equal(result, -11);
});

test("reduce() should running the reducer function across all elements of the array, and return a value", () => {
  const result = reduce([1, 4, 3, 5], (total, x) => total - x, 2);
  equal(result, -9);
});

test("reduce() should running the reducer function across all elements of the array, and return a value", () => {
  const result = reduce([1, 2, 3], (total, x) => total + x, 9);
  equal(result, 15);

});
// testing flat()
test("flat() should turn a nested array into a single-level array", () => {
  const result = flat([1, [2, 3]]);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});

test("flat() should flatten nested arrays 2 levels deep", () => {
  const result = flat([1, [2, [3]]], 2);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});
