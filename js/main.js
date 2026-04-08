const pads = document.querySelectorAll(".pad");


for (let i = 0; i < pads.length; i++) {
    pads[i].addEventListener("click", function () {
        const sound_path = pads[i].getAttribute("data-sound");
        new Audio(sound_path).play();



        // pads[i].classList.add("active");
        // setTimeout(function () {
        //     pads[i].classList.remove("active");
        // }, 100);
    });
}


// new Audio(../assets/boom.wav).play();