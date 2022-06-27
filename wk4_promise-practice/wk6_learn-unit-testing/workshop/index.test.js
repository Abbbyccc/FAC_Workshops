test("makeUrl should create the correct PokéAPI URL", () => {
    equal(makeUrl('pikachu'), 'https://pokeapi.co/api/v2/pikachu')
    equal(makeUrl('bulbasaur'), 'https://pokeapi.co/api/v2/bulbasaur')
})


test("searchParamsToObject should return an Object from the given string", () => {
    const param = searchParamsToObject("name=oliver&email=hello@oliverjam.es")
    const expect = { name: "oliver", email: "hello@oliverjam.es" }
    equal(param.name, expect.name)
    equal(param.email, expect.email)
})

test("isLeapYear should return if input is leap year", () => {
    equal(isLeapYear("hi"), "Please enter a positive number", "Input must be a number");
    equal(isLeapYear(-1500), "Please enter type number only", "Input must be positive");
    equal(isLeapYear(1900), false, "1900 should not be a leap year");
});

test("isLeapYear should return if input is leap year", () => {
    equal(isLeapYear("hi_Abby"), "Please enter a positive number", "Input must be a number");
    equal(isLeapYear(-2000), "Please enter type number only", "Input must be positive");
    equal(isLeapYear(2020), true, "2020 should be a leap year");
});