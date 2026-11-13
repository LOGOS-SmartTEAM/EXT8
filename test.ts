// Pruebas rápidas — esto NO se compila cuando la carpeta se usa como extensión.
bloques.boton(SabanaPuerto.P0)
bloques.led(bloques.SabanaEstadoOnOff.ON, SabanaPuerto.P1)
bloques.sensorColorDetecta(bloques.SabanaColorDetectado.Rojo)
basic.showNumber(bloques.joystick(bloques.SabanaEjeJoystick.Boton))
bloques.bluetoothAlRecibir("A", function (value) {
    if (bloques.bluetoothActivado("A")) {
        bloques.motorMulticolor(bloques.SabanaColorMotor.Rojo, bloques.SabanaMovimientoMotorUnico.Derecha, bloques.bluetoothVelocidadRueda(bloques.SabanaBluetoothRueda.Izquierda))
    }
})
bloques.bluetoothEnviarNumero("T", bloques.joystick(bloques.SabanaEjeJoystick.EjeX))
