
const MaquinaEstados = {
    estado_actual: 'texto por aqui',

    actualizar: (evento) => {
        console.log(evento);
    },

    cambiar_estado: (estado_nuevo) => {
        console.log("---(cambiando estado)---");
        console.log(estado_nuevo);

    }

}

