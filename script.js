$(document).ready(function(){


//starter function to pull a random pokemon from the PokeAPI



  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
        pokeData['name'];
      console.log(pokeData['name']);
      console.log("Left Pokemon Data: ", pokeData);
       pokeData['sprites']['front_default'];
      console.log(pokeData['sprites']['front_default'])
       $("#spaceforname1").append(pokeData['name']);



    let leftPokemonDisplay =  `
      <img src="${pokeData['sprites']['front_default']}">
      `
      console.log(leftPokemonDisplay);

      $("#left").append(leftPokemonDisplay);

});

}

$("#leftButton").click(getRandomPokemonLeft);



//all code here



function getRandomPokemonRight() {
  let randomNumber = Math.floor(Math.random() * 800) + 1;
  $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
    console.log("Right Pokemon Data: ", pokeData);
    pokeData['name'];
    console.log(pokeData['name']);
    console.log("Right Pokemon Data: ", pokeData);
      pokeData['sprites']['front_default'];
    console.log(pokeData['sprites']['front_default'])
    $("#spaceforname2").append(pokeData['name']);


    let rightPokemonDisplay =  `
    <img src="${pokeData['sprites']['front_default']}">
    `
  $("#rightPic").append();
});


}

$("#rightButton").click(getRandomPokemonRight);

//all code here







})
