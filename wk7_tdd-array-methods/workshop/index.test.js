// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => { });
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

// testing filter()
test("filter() should return an array with the same number of elements", () => {
  const result = filter([1, 2, 3], (x) => x > 1);
  equal(result.length, 2);
});

test("filter() should transform each element of the array using the fn argument", () => {
  const result = filter([1], (x) => x < 1);
  equal(result.length, 2)
});
