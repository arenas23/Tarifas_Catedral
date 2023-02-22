document.addEventListener("DOMContentLoaded", () => {
    let enlaces = document.querySelectorAll("a");
    let imagenes = document.querySelectorAll("img");
    let frames = document.querySelectorAll("iframe");



    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].setAttribute("aria-label", "enlace");
    }

    for (let i = 0; i < imagenes.length; i++) {
        if (!imagenes[i].getAttribute("alt") || imagenes[i].getAttribute("alt") == "" || imagenes[i].getAttribute("alt") == " ") {
            imagenes[i].setAttribute("alt", "imagen");
        }
    }

    for (let i = 0; i < frames.length; i++) {
        frames[i].setAttribute("title", "iframe");

    }
    let botones = document.querySelectorAll("button");
    for (let i = 0; i < botones.legth; i++) {
        botones[i].setAttribute("aria-label", "btn");
    }
})