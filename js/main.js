const pads = document.querySelectorAll(".pad");


// for (let i = 0; i < pads.length; i++) {
//     pads[i].addEventListener("click", function () {
//         // const sound_path = pads[i].getAttribute("data-sound");
//         // const audio = new Audio(sound_path);
//         // audio.currentTime = 0;
//         // audio.play();

//         // pads[i].classList.add("active");
//         // setTimeout(function () {
//         //     pads[i].classList.remove("active");
//         // }, 100);


//         playSound(pads[i]);
//     });
// }

function playSound(pad) {
    const sound_path = pad.getAttribute("data-sound");
    const audio = new Audio(sound_path);
    audio.currentTime = 0;
    audio.play();
    pad.classList.add("active");
    setTimeout(function () {
        pad.classList.remove("active");
    }, 100);
}

pads.forEach((pad) => {
    pad.addEventListener("click", function () {
        playSound(pad);
    });
});
// new Audio(../assets/boom.wav).play();