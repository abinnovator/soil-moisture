pins.analogWritePin(AnalogPin.P1, 1023)
let reading = pins.analogReadPin(AnalogPin.P0)
pins.analogWritePin(AnalogPin.P1, 0)
led.plotBarGraph(
reading,
1023
)
if (input.buttonIsPressed(Button.A)) {
    basic.showNumber(reading)
}
basic.pause(5000)
if (reading < 500) {
    basic.showIcon(IconNames.Umbrella)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(3000)
    pins.servoWritePin(AnalogPin.P2, 80)
    basic.pause(3000)
    pins.servoWritePin(AnalogPin.P2, 0)
}
basic.forever(function () {
    led.setBrightness(64)
})
