let estado_actual = estado_base;

const tiempo_espera = 1000




const MaquinaEstados = {
    inicializar: () => {
        console.log("Esta VIVO")
        estado_actual.inicializar()
    },

    actualizar: (evento) => {
        console.log(estado_actual);
        estado_actual.actualizar(evento);
    },

    cambiar_estado: (estado_nuevo) => {
        console.log("---(cambiando estado)---");
        console.log("---(estado actual)---");
        console.log(estado_actual);
        console.log("---(estado nuevo)---");
        console.log(estado_nuevo);

        estado_actual.finalizar()
        estado_actual = estado_nuevo
        estado_actual.inicializar()

    }

}



















