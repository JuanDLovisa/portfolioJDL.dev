(function (){
    emailjs.init("4INM-n5qXquvKzd0U");
}());

const form = document.getElementById("contact-form");
const flash = document.getElementById("flash-messages");

form.addEventListener("submit", function(e){
    e.preventDefault();

    flash.innerHTML = "Enviando mensaje..."

    emailjs.sendForm(
        "service_ur0thom",
        "template_fmiboep",
        this
    )
    .then(() => {
        flash.innerHTML = "Mensaje enviado correctamente ✅";
        flash.style.color = "lightgreen";
        form.reset();
    })
    .catch((error) => {
        flash.innerHTML = "Error al enviar el mensaje ❌";
        flash.style.color = "red";
        console.error(error)
    })
})