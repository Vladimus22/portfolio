const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const video = document.querySelector(".vid-container video");

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    const timeDisplay = document.querySelector(".time-display");

    
   
    let duration = 600;

    //play sounds
    play.addEventListener('click', () =>{
        checkPlaying(song);
    });

    //stop and resume sounds
     const checkPlaying = song => {
         if(song.paused){
             song.play();
             video.play();
             play.src = './images/pause.png';
         }else{
             song.pause();
             video.pause();
             play.src = './images/play_btn.webp';
         }
     } 


     sounds.forEach(sound => {
        sound.addEventListener("click", function() {
          song.src = this.getAttribute("data-sound");
          video.src = this.getAttribute("data-video");
          checkPlaying(song);
        });
      });

      var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.querySelector(".time-display").innerHTML = d.toLocaleTimeString();
}
};
app();