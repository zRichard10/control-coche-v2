radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Adelante()
    }
    if (receivedNumber == 2) {
        Derecha()
    }
    if (receivedNumber == 3) {
        Izquieda()
    }
    if (receivedNumber == 4) {
        Atras()
    }
    if (receivedNumber == 0) {
        Parada()
    }
    if (receivedNumber == 5) {
        Verbena()
    }
})
function Atras () {
    Maqueen.WriteLED(Maqueen.LED.LEDRight, Maqueen.LEDswitch.turnOn)
    Maqueen.WriteLED(Maqueen.LED.LEDLeft, Maqueen.LEDswitch.turnOn)
    Maqueen.MotorRun(Maqueen.Motors.All, Maqueen.Dir.CCW, 100)
    basic.showArrow(ArrowNames.South)
}
function Adelante () {
    Maqueen.MotorRun(Maqueen.Motors.All, Maqueen.Dir.CW, 100)
    Maqueen.WriteLED(Maqueen.LED.LEDRight, Maqueen.LEDswitch.turnOn)
    Maqueen.WriteLED(Maqueen.LED.LEDLeft, Maqueen.LEDswitch.turnOn)
    basic.showArrow(ArrowNames.North)
}
function Verbena () {
    strip.showRainbow(1, 4)
    basic.showIcon(IconNames.Happy)
}
function Parada () {
    Maqueen.WriteLED(Maqueen.LED.LEDLeft, Maqueen.LEDswitch.turnOff)
    Maqueen.WriteLED(Maqueen.LED.LEDRight, Maqueen.LEDswitch.turnOff)
    Maqueen.MotorStop(Maqueen.Motors.All)
    basic.showIcon(IconNames.Square)
}
function Derecha () {
    Maqueen.WriteLED(Maqueen.LED.LEDLeft, Maqueen.LEDswitch.turnOn)
    Maqueen.WriteLED(Maqueen.LED.LEDRight, Maqueen.LEDswitch.turnOff)
    Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 100)
    basic.showArrow(ArrowNames.East)
}
function Izquieda () {
    Maqueen.WriteLED(Maqueen.LED.LEDRight, Maqueen.LEDswitch.turnOn)
    Maqueen.WriteLED(Maqueen.LED.LEDLeft, Maqueen.LEDswitch.turnOff)
    Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 100)
    basic.showArrow(ArrowNames.West)
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(66)
