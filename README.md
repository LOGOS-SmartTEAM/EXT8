# EXT8 — STEAMbit 8

Extensión MakeCode para micro:bit, categoría **STEAMbit 8**. Versión **4.0.0**.

## Cómo agregarla en MakeCode

1. En MakeCode, **Extensiones** → pegar `https://github.com/LOGOS-SmartTEAM/EXT8` y elegirla.
2. Aparece la categoría **STEAMbit 8** en la caja de herramientas.

### Actualizar en un proyecto existente

Los proyectos quedan fijados a la versión con la que se agregó la extensión. Para tener la 4.0.0:
en el Explorador del proyecto (debajo del simulador), actualizar la extensión, o quitarla y volver a agregarla.

## Idiomas

Español, inglés y portugués: los bloques y sus ayudas se muestran en el idioma elegido en MakeCode
(Configuración → Idioma). Cualquier otro idioma muestra inglés.

## Bloques


### SENSORES

| Bloque | Qué hace |
|---|---|
| Botón │ en pin … | Devuelve 1 si el botón está presionado y 0 si está suelto. |
| Sensor de Suelo │ en pin … | Mide la humedad de la tierra (0 a 1023). |
| Potenciómetro │ en pin … | Lee la posición de la perilla (0 a 1023). |
| Sensor de Luz │ en pin … | Mide la luz: 0 = oscuro, 1023 = mucha luz. |
| Ultrasonido │ en pin I2C | Mide la distancia a un objeto en centímetros (0 a 200). |
| … │ en pin I2C | Mide la temperatura (°C) o la humedad (%). |
| Sensor de Color │ Detecta … en pin I2C | Detecta si el sensor ve el color elegido. |
| Seguidor de líneas │ … en pin I2C | Detecta si ese lado del seguidor está sobre la línea negra. |
| Joystick │ … en pin I2C | Lee la posición del joystick en el eje X o Y (−100 a 100) o su botón (1 = presionado, 0 = suelto). |

### SALIDAS

| Bloque | Qué hace |
|---|---|
| LED │ Estado … en pin … | Prende o apaga el LED. |
| LED │ Intensidad … en pin … | Ajusta el brillo del LED: 0 = apagado, 1023 = máximo. |
| Tira RGB │ … … … … … … en pin I2C | Elige el color de cada uno de los 6 LEDs de la tira. |
| Tira RGB │ ajustada a R … G … B … | Prende toda la tira con la mezcla de rojo, verde y azul (0 a 255). |
| Tira RGB │ apagar todos | Apaga todos los LEDs de la tira. |

### MOVIMIENTO

| Bloque | Qué hace |
|---|---|
| … │ Velocidad … | Mueve el robot a la velocidad elegida (0 a 100). |
| … │ Velocidad … por … cm | Avanza o retrocede los centímetros elegidos y se detiene. |
| … │ Velocidad … ángulo de … | Gira el robot los grados elegidos y se detiene. |

### MOTORES

| Bloque | Qué hace |
|---|---|
| Servo │ …° en pin … | Mueve el servo al ángulo elegido (0 a 180°). |
| Hélice │ … en pin … | Prende o apaga la hélice. |
| Motor │ … … en pin I2C  Velocidad … | Hace girar un motor. Con + elegís la velocidad (0 a 100). |

### PANTALLAS

| Bloque | Qué hace |
|---|---|
| OLED │ Escribir … en fila … en columna … en pin I2C | Escribe un texto o un número en la pantalla OLED. |
| OLED │ borrar textos en pin I2C | Borra todo lo escrito en la pantalla OLED. |

### Bluetooth

| Bloque | Qué hace |
|---|---|
| al conectarse la app | Ejecuta el código cuando se conecta la app STEAMbit. |
| al desconectarse la app | Ejecuta el código cuando se desconecta la app STEAMbit. |
| app conectada | Verdadero mientras la app STEAMbit está conectada. |
| mostrar nombre bluetooth de la placa | Hace desfilar en la pantalla el nombre Bluetooth de esta placa (por ejemplo ZAVIG para "BBC micro:bit [zavig]"), el mismo que muestra la app. |
| al recibir etiqueta … con … | Ejecuta el código cada vez que la app manda un valor con esta etiqueta. |
| número con etiqueta … | El último número que mandó la app con esta etiqueta (0 si todavía no llegó nada). |
| texto con etiqueta … | El último texto que mandó la app con esta etiqueta ("" si todavía no llegó nada). |
| … está activado | Verdadero si el último valor que mandó la app con esta etiqueta no es "0" ni vacío. Sirve para el interruptor de la app (valores 1/0). |
| enviar a la app … con etiqueta … | Manda un número a la app. Aparece en los visores, dígitos y gráficas que usan esta etiqueta. |
| cruceta en … | Verdadero si la cruceta de la app (tracción diferencial) apunta en esa dirección. La cruceta manda solo la dirección, sin velocidad. |
| joystick … | Posición del joystick 360° de la app (tracción omnidireccional), de -100 a 100. y es adelante/atrás, x es izquierda/derecha y giro es el control de rotación. |
| velocidad rueda … | Velocidad de una rueda de un robot de dos ruedas manejado con el joystick 360°, de -100 a 100. Encastrala en tu bloque de motor. |
| botón … de la app presionado | Verdadero mientras el botón A o B de la pantalla de joystick de la app está presionado. |
| enviar texto … a la app con etiqueta … | Manda un texto a la app (por ejemplo, a una terminal). |
| enviar sí/no … a la app con etiqueta … | Manda verdadero/falso a la app (1/0, para un indicador de estado). |
| enviar evento … a la app | Manda un evento a la app (aparece en el monitor de la app). Solo letras, números y _. |
| fijar pausa entre envíos en … ms | Pausa mínima entre mensajes enviados a la app. Con 100 ms está probado que no se pierden bytes; valores menores mandan más rápido pero pueden perder datos. |

## Bluetooth (app STEAMbit)

Los bloques de **Bluetooth** son los de la extensión
[pxt-steambit-bluetooth](https://github.com/smartteamok/pxt-steambit-bluetooth), con la misma
lógica y protocolo. Por eso esta extensión depende de **bluetooth**:

- **bluetooth es incompatible con radio**: un proyecto con esta extensión no puede usar los bloques
  de radio (MakeCode ofrece quitar radio al agregarla).
- En cada proyecto hay que activar **⚙ Configuración del proyecto → "No Pairing Required: Anyone can
  connect via Bluetooth"**; la extensión no puede hacerlo sola y se pierde al crear un proyecto nuevo.
- El servicio UART de Bluetooth arranca siempre al iniciar el programa, aunque no se use ningún bloque
  Bluetooth.
- micro:bit V1: Bluetooth ocupa ~16 KB más de memoria de programa; los programas con OLED no entran en V1.
- Etiquetas: elegí una letra A–Z (como en la app) o escribí una como `temp` (letras, números y `_`,
  hasta 16). Reservadas: las que empiezan con `_` y las del joystick (`joy`, `jx`, `jy`, `jr`, `btnA`, `btnB`).

## Estructura

```
bloques.ts        ← todos los bloques (un solo archivo), generado desde STV2-PADRE
main.ts           ← solo descripción
test.ts           ← pruebas rápidas (no se incluyen al usar la extensión)
_locales/es, pt   ← traducciones (el código está en inglés)
pxt.json          ← nombre, versión y lista de archivos
```

Los bloques se corrigen en **STV2-PADRE** y se regenera este archivo.

## Licencia

MIT
