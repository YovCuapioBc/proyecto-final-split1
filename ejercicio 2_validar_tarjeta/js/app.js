//Solicitar al usuario un número de tarjeta bancaria
var card = prompt('Ingresa un número de tarjeta');
//Declarando la funcion que contendra el bloque de codigo
var isValidCard = function(array){
  var digits = [];
  digits.reverse();
//se genera un for para contar los indices de la tarjeta 
    for(var i=0; i >= card.length; i++){
//Aqui utilizamos la algoritmo de Lunh    
      if(i % 2){
        var couple = [digits] * 2;
        
      if(couple >= 10){
        couple = (couple % 10) / 10;
      }  
      }
    }
};

isValidCard(card);