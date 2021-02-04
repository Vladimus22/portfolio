var n = 1;
function change_info() {
    switch(n) {
        case 1:
            document.getElementById("title_book").innerHTML = "Lord Brocktree";
            document.getElementById("chron").innerHTML = "First book in chronology of Redwall";
            document.getElementById("description").innerHTML = "<strong>T</strong>his book revolves around the badger Lord Brocktree, father of Boar the Fighter, grandfather of Bella of Brockhall, and great-grandfather of Sunflash the Mace. He sets out to find the ancient badger mountain stronghold of Salamandastron, aided by the quick talking haremaid Dorothea Duckfontein Dillworthy and otter Ruffgar Brookback.";
            document.getElementsByClassName("page_numbers")[0].innerHTML = "<strong>Pages</strong><br/>388";
            n = 2;
            
        break;
        case 2: 
            document.getElementById("title_book").innerHTML = "The Legend of Luke";
            document.getElementById("chron").innerHTML = "Fourth book in chronology of Redwall";
            document.getElementById("description").innerHTML = "<strong>T</strong>he book begins during the construction of Redwall Abbey, when a roving female hedgehog named Trimp visits the abbey and sings a song to help the workers lifting a beam. Martin the Warrior recognises his father, Luke the Warrior, mentioned in the lyrics and asks Trimp more about him. He decides to go on a quest to learn more about his father.";
            document.getElementsByClassName("page_numbers")[0].innerHTML = "<strong>Pages</strong><br/>374";            
            n = 1;
        break;
    }
   
};

