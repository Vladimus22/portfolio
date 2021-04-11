let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let first_unit = document.getElementById("first_unit");
let second_unit = document.getElementById("second_unit");
//selectors
let first_unit_select = document.getElementById("op_first_unit").selectedIndex;
let first_unit_option = document.getElementById("op_first_unit").options;
let second_unit_select = document.getElementById("op_second_unit").selectedIndex;
let second_unit_option = document.getElementById("op_second_unit").options;
//bool
let checkUnitIsActive = true;
//units
let num1;
let num2;
//add events to buttons
document.getElementById("one").addEventListener("click", inputOne);
document.getElementById("two").addEventListener("click", inputTwo);
document.getElementById("three").addEventListener("click", inputThree);
document.getElementById("four").addEventListener("click", inputFour);
document.getElementById("five").addEventListener("click", inputFive);
document.getElementById("six").addEventListener("click", inputSix);
document.getElementById("seven").addEventListener("click", inputSeven);
document.getElementById("eight").addEventListener("click", inputEight);
document.getElementById("nine").addEventListener("click", inputNine);
//add events to text fields
document.getElementById("first_unit").addEventListener("click", function (){checkUnitIsActive = true});
document.getElementById("second_unit").addEventListener("click", function () {checkUnitIsActive = false});
//update values in text fields
setInterval( function updateValues() {
   num1 = Number(first_unit.value);
   num2 = Number(second_unit.value);
}, 1000);
//add numbers in text fields
function inputOne() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[0];      
   } else {
      second_unit.value = second_unit.value + numbers[0];
   }   
}
function inputTwo() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[1];
   } else {
      second_unit.value = second_unit.value + numbers[1];
   }   
}
function inputThree() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[2];
   } else {
      second_unit.value = second_unit.value + numbers[2];
   }   
}
function inputFour() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[3];
   } else {
      second_unit.value = second_unit.value + numbers[3];
   }   
}
function inputFive() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[4];
   } else {
      second_unit.value = second_unit.value + numbers[4];
   }   
}
function inputSix() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[5];
   } else {
      second_unit.value = second_unit.value + numbers[5];
   }   
}
function inputSeven() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[6];
   } else {
      second_unit.value = second_unit.value + numbers[6];
   }   
}
function inputEight() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[7];
   } else {
      second_unit.value = second_unit.value + numbers[7];
   }   
}
function inputNine() {
   if (checkUnitIsActive == true) {
      first_unit.value = first_unit.value + numbers[8];
   } else {
      second_unit.value = second_unit.value + numbers[8];
   }   
}
//formulas for convertation
function Convert() {
   if (first_unit_option[first_unit_select].text == "Meters" && second_unit_option[second_unit_select].text == "Kilometer") {
      num2 = num1 / 1000;
      second_unit.value = num2;
   }   
   //1
   // let obj = JSON.parse('{"distance": "1"}');
   // console.log(obj);
   //React maybe
   // var request = new XMLHttpRequest();
   // request.open("GET", "./metric.json", false);
   // request.send(null)
   // var my_JSON_object = JSON.parse(request.responseText);
   // alert (my_JSON_object.result[0]);

   //2
   let arr = null;
   $.ajax({
      'async': false,
      'global': false,
      'url': "https://vladimus22.github.io/portfolio/JSON_tasks/metric.json",
      'dataType': "json",
      'success': function (data) {
         arr = data;
      }
   });
   console.log(arr);
 
}
