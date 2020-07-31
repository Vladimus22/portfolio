var day_btn = document.getElementById('day'); 
var night_btn = document.getElementById('night');   
var check_btn = 'day';

function sw_day_night_buttons() {
      
    if (check_btn == 'night'){
        day_btn.src = 'day_mode.png';
        night_btn.src = 'night_mode_on.png';
        check_btn = 'day'  
    } else {
        day_btn.src = 'day_mode_on.png';
        night_btn.src = 'night_mode.png';
        check_btn = 'night';
    }
          
}
