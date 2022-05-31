let escala = 0
input.onButtonPressed(Button.A, function () {
    escala = 128
})
input.onButtonPressed(Button.B, function () {
    escala = 225
})
basic.forever(function () {
    if (input.soundLevel() > escala * 0.3 && input.soundLevel() < escala * 0.5) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (input.soundLevel() > escala * 0.5 && input.soundLevel() < escala * 0.9) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (input.soundLevel() > escala * 0.9) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, input.soundLevel() / 1.4)
})
