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