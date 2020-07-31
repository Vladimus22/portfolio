function change_bg_color(name_id, hex_color, text_color){

    var el = document.getElementById(name_id);
    el.style.transition = 'background 1.0s linear 0s';
    el.style.backgroundColor = hex_color;
    el.style.color = text_color;    
    
}