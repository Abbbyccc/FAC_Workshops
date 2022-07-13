test("Can add numbers and string numbers", () => {
    equal(calculate('1', '+', 2), 3)
    equal(calculate(1, '+', 2), 3)
    equal(calculate('2', '+', '2'), 4)
})

test("Can subtract numbers and string numbers", () => {
    equal(calculate('1', '-', 2), - 1)
    equal(calculate(6, '-', 2), 4)
    equal(calculate('2', '-', '2'), 0)
})

test("Can divide numbers and string numbers", () => {
    equal(calculate('6', '/', 2), 3)
    equal(calculate(89474, '/', 2), 44737)
    equal(calculate('2', '/', '2'), 1)
    equal(calculate('23', '/', '2'), 11.5)
})

test("Can multiply numbers and string numbers", () => {
    equal(calculate('6', '*', 2), 12)
    equal(calculate(89474, '*', 2), 178948)
    equal(calculate('2', '*', '-2'), -4)
})

test("Errors for invalid sign", () => {
    equal(calculate(4, "$", 2), "Please enter a valid sign (+, -, *, /)");
});

test('check if the cauculater result shown correctly on the page', () => {
    const aInput = document.querySelector("#a");
    const signInput = document.querySelector("select");
    const bInput = document.querySelector("#b");

    aInput.value = "5";
    signInput.value = "-";
    bInput.value = "22";

    const submitBtn = document.querySelector("button")
    submitBtn.click()

    const result = document.querySelector("#result")


    equal(result.textContent, '27')
    result.textContent = ""

})