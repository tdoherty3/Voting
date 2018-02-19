$(document).ready(function() {
  var age = parseInt(prompt("how old are you?"));

   if (age>=18){
     $('#voting-age').show();
   } else if (age>=16){
     alert("Did you know you can register now?");
     $('#voting-age').show();
   } else {
     $('#non-voting-age').show();
   }
});
