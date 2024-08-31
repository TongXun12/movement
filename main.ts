basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            pins.servoWritePin(AnalogPin.P0, 180)
        }
    }
})
