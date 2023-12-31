const setas = document.querySelectorAll(".seta");
const respostas = document.querySelectorAll(".resposta");

setas.forEach((seta, index) => {
    seta.addEventListener("click", () => {
        respostas.forEach(function(el){
            el.classList.remove("selected");
        })
        respostas[index].classList.add("selected");
    });
})
