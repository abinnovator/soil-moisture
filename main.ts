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
basic.forever(function () {
	
})
