
const estado_base = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta en estado base"

        document.querySelector("#boton1").innerText = "Cambiar a Llorar por comida"
        document.querySelector("#boton2").innerText = "Cambiar a Dormir"
    },
    actualizar: (evento) => {
        // document.querySelector("#mostrar_estado").innerText = "Pulsaste el boton"
        // console.log(evento.target)

        if(evento.type == "temporizador"){
            bebe.hambre += 10
            document.querySelector("#mostrar_estado").innerText = `Bebe tiene ${bebe.hambre} cantidad de hambre`

            if(bebe.hambre > 90){
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
    },
}


const llorar_por_comida = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta llorando por comida"

        document.querySelector("#boton1").innerText = "Alimentar"
        document.querySelector("#boton2").innerText = "----"

        document.querySelector("#boton2").classList.add("oculto")
    },

    actualizar: (evento) => {

        if(evento.target && evento.target.id === "boton1"){

            bebe.hambre = 0
            MaquinaEstados.cambiar_estado(estado_base)
        }


    },

    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta saliendo del estado llorar por comida"
    },
}











