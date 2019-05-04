$(document).ready(function(){


//starter function to pull a random pokemon from the PokeAPI



  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
      pokeData['name'];
      console.log(pokeData['name']);
      $("#spaceforname1").append(pokeData['name']);
    });


  }



//all code here

$("#leftButton").click(getRandomPokemonLeft);




})
