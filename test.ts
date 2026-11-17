// Pruebas rápidas — esto NO se compila cuando la carpeta se usa como extensión.
bloques.boton(SabanaPuerto.P0)
bloques.led(bloques.SabanaEstadoOnOff.ON, SabanaPuerto.P1)
bloques.sensorColorDetecta(bloques.SabanaColorDetectado.Rojo)
basic.showNumber(bloques.joystick(bloques.SabanaEjeJoystick.EjeY))
bloques.iniciarCronometro()
bloques.bluetoothMostrarNombre()
bloques.bluetoothAlRecibir("A", function (value) {
    bloques.motorMulticolor(bloques.SabanaColorMotor.Rojo, bloques.SabanaMovimientoMotorUnico.Derecha, value)
    basic.showString(bloques.bluetoothTexto("M"))
})
bloques.bluetoothEnviarNumero("T", bloques.joystick(bloques.SabanaEjeJoystick.EjeX) + bloques.bluetoothNumero("A"))
bloques.bluetoothEnviarTexto("M", "" + bloques.cronometro())
