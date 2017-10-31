var card = prompt('Ingresa un número de tarjeta');

var isValidCard = function(array){
  var digits = [];
  digits.reverse();
  
    for(var i=0; i >= card.length; i++){
      if(i % 2){
        var couple = [digits] * 2;
        
      if(couple >= 10){
        couple = (couple % 10) / 10;
      }  
      }
    }
};

isValidCard(card);