//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.getElementById("buttons");
    const sounds = ["applause", "boo", "tada" ,"victory", "wrong"]; // Add your sound file names (without extension)
    
    sounds.forEach(sound => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = sound;
        
        const audio = new Audio(`sounds/${sound}.mp3`);
        
        btn.addEventListener("click", () => {
            stopSounds();
            audio.play();
        });
        
        buttonsContainer.appendChild(btn);
    });
    
    const stopBtn = document.createElement("button");
    stopBtn.classList.add("stop");
    stopBtn.innerText = "Stop";
    stopBtn.addEventListener("click", stopSounds);
    
    buttonsContainer.appendChild(stopBtn);
    
    function stopSounds() {
        document.querySelectorAll("audio").forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }
});
