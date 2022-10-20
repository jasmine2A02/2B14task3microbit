let count = 0
input.onButtonPressed(Button.A, function () {
    count = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    count = 9
    basic.showNumber(count)
    while (count > 0) {
        count += -1
        basic.showNumber(count)
    }
    while (count == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        count = 11
    }
})
