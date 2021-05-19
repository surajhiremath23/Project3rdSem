import anime from './JS/anime.es.js';
import Game from './JS/Game.js';
//DOM
function classSelec(val){
    return document.querySelector('.'+val);
}
function idSelec(val){
    return document.querySelector('#'+val);
}
//DOM
//object creation
let game=new Game();
//object creation




//Event handlers
idSelec('rock').addEventListener('click',()=>{
    game.mainFunc(1);
});
idSelec('paper').addEventListener('click',()=>{
    game.mainFunc(2);
});
idSelec('scissor').addEventListener('click',()=>{
    game.mainFunc(3);
});
idSelec('reset').addEventListener('click',()=>{
    game.reset(); 
});
idSelec('reset2').addEventListener('click',()=>{
    game.reset(); 
});
idSelec('highScore').addEventListener('click',()=>{
    game.highScore();
    console.log(localStorage.getItem('scores'));
});
//Event handlers
