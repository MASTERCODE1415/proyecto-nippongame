basic.showLeds(`
    . . . . .
    . # # # .
    # . . . #
    . # . # .
    . . # . .
    `)
music.play(music.stringPlayable("B G E B G E A C5 ", 120), music.PlaybackMode.UntilDone)
basic.clearScreen()
basic.showString("¡Hola!")
basic.showString("PROYECTO NIPPONGAMES")
music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
