
const estado_base = {
    inicializar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta en estado base"

        document.querySelector("#boton1").innerText = "Cambiar a Llorar por comida"
        document.querySelector("#boton2").innerText = "Cambiar a Dormir"
    },
    actualizar: (evento) => {
        document.querySelector("#mostrar_estado").innerText = "Pulsaste el boton"
        console.log(evento.target)

        if(evento.target && evento.target.id === "boton1"){
            console.log("HOuston estamos bien")
            MaquinaEstados.cambiar_estado(llorar_por_comida)
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
    },
    actualizar: () => {
        //document.querySelector("#mostrar_estado").innerText = ""
    },
    finalizar: () => {
        document.querySelector("#mostrar_estado").innerText = "Esta saliendo del estado llorar por comida"
    },
}











