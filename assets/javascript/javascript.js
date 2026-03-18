const boton = document.getElementById("botonArriba")

boton.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})