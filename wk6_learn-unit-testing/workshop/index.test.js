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
    equal(isLeapYear("hi"), "Please enter type number only", "Input must be a number");
    equal(isLeapYear(-1500), "Please enter a positive number", "Input must be positive");
    equal(isLeapYear(1900), false, "1900 should not be a leap year");
    equal(isLeapYear(2007), false, "2007 should not be a leap year");
    equal(isLeapYear(1901), false, "1901 should not be a leap year");
    equal(isLeapYear(2013), false, "2013 should not be a leap year");
});

test("isLeapYear should return if input is leap year", () => {
    equal(isLeapYear("hi_Abby"), "Please enter type number only", "Input must be a number");
    equal(isLeapYear(-2000), "Please enter a positive number", "Input must be positive");
    equal(isLeapYear(2092), true, "2092 should be a leap year");
    equal(isLeapYear(2008), true, "2008 should be a leap year");
});