

function timer_start() {
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    
    setInterval(milliseconds, 100);
    music();
}
function milliseconds(){
   var ms_text = document.querySelector('.milliseconds');
   ms ++;
   ms_text.innerHTML = ms;
   if (ms == 10){
       s ++;
       ms = 0;
      seconds();
      
   }
}
function seconds() {
    var s_text = document.querySelector('.seconds')
    s_text.innerHTML = s;
    if (s == 60) {
        m++;
        s = 0;
        minutes();
    }
}
function minutes() {
    var m_text = document.querySelector(".minutes")
    m_text.innerHTML = m;
}
function music(){
    song = document.querySelector(".song");
    sond_start =  song.play();
    music_start();   
    
}
function music_start(){
    sond_start;
}