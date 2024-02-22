let temporizador_activo = 0

function establecer_tempo(tiempo_espera){
    return setInterval(() => {
            MaquinaEstados.actualizar({
                type: "temporizador"
            })
        }, tiempo_espera);
}

const estado_base = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta en estado base"

        document.querySelector("#boton1").innerText = "Cambiar a Llorar por comida"
        document.querySelector("#boton2").innerText = "Cambiar a Dormir"

        temporizador_activo = establecer_tempo(1000)
    },
    actualizar: (evento) => {
        if(evento.type == "temporizador"){
            bebe.hambre += 10
            document.querySelector("#mostrar_estado").innerText = `Bebe tiene ${bebe.hambre} cantidad de hambre`

            if(bebe.hambre > 40){
                MaquinaEstados.cambiar_estado(llorar_por_comida)
            }
        }

        if(evento.target && evento.target.id === "boton1"){
            console.log("HOuston estamos bien")
        }
        else {
            console.log("Houston tenemos un problema")

        }
    },
    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta saliendo del estado base"
        clearInterval(temporizador_activo)
    },
}


const llorar_por_comida = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta llorando por comida"

        document.querySelector("#boton1").innerText = "Alimentar"
        document.querySelector("#boton2").innerText = "----"

        document.querySelector("#boton2").classList.add("oculto")

        temporizador_activo = establecer_tempo(1000)
    },

    actualizar: (evento) => {
        if(evento.type == "temporizador"){
            bebe.hambre += 10
        }

        if(evento.target && evento.target.id === "boton1"){
            bebe.hambre = 0
            MaquinaEstados.cambiar_estado(estado_base)
        }

        if(bebe.hambre > 100){
            MaquinaEstados.cambiar_estado(muriendo)

        }


    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta saliendo del estado llorar por comida"
        clearInterval(temporizador_activo)
    },
}

const muriendo = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta muriendo"

        document.querySelector("#boton1").innerText = "------"
        document.querySelector("#boton2").innerText = "----"

        document.querySelector("#boton2").classList.add("oculto")
        document.querySelector("#boton1").classList.add("oculto")

    },
    actualizar: () => {
    },
    finalizar: () => {},
}













