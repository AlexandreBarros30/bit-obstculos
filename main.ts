let destancia = false
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 40 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        destancia = Math.randomBoolean()
        if (destancia == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 144)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
        if (destancia == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 144)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    }
})
