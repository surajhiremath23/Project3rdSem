//DOM
function classSelec(val){
    return document.querySelector('.'+val);
}
function idSelec(val){
    return document.querySelector('#'+val);
}
//DOM
export default class Game{

    constructor(){
        this.score=0;
        this.keepRunning=true;
        this.compValue;
        this.userValue;
    }
    randomValue(){
        let value;
        value=Math.ceil(Math.random()*3);
        this.compValue=value;
    }


    logic(user,com){
        if(user==1&&com==3||user==2&&com==1||user==3&&com==2){
            this.score++;
        }else if(user==com){
            //do nothing
        }else{
            this.keepRunning=false;
            $('.modal-title').html('Game Over: '+this.score);
            $("#GameOver").modal();
        }
    }

    displayHighScore(){
        let scores=JSON.parse(localStorage.getItem('scores'));
        $('#dispHS').html(`<li>${scores[0]}</li>
        <li>${scores[1]}</li>
        <li>${scores[2]}</li>
        <li>${scores[3]}</li>
        <li>${scores[4]}</li>`);
    }

    highScore(){
        let scores1=[];
        let scores=JSON.parse(localStorage.getItem('scores'));
        if(scores==null){
            scores1.push(this.score);
            localStorage.setItem('scores',JSON.stringify(scores1));
        }else{
            scores.push(this.score);
            scores.sort((a,b)=>{return b-a});
            while(scores.length>5)
                scores.pop();

            localStorage.setItem('scores',JSON.stringify(scores));
        }
        this.displayHighScore();
    }
    check(){
        if(!this.keepRunning){
            this.highScore();       
        }
            
        else{
            idSelec('score').innerHTML=`${this.score}`;
        }    

    }

    updateDom(){
        switch(this.userValue){
            case 1:
                idSelec('userImg').src='./src/IMG/rock2.png'
                break;
            case 2:
                idSelec('userImg').src='./src/IMG/paper2.png'
                break;
            case 3:
                idSelec('userImg').src='./src/IMG/scissor2.png'
                break;
        }
        switch(this.compValue){
            case 1:
                idSelec('comImg').src='./src/IMG/rock1.png'
                break;
            case 2:
                idSelec('comImg').src='./src/IMG/paper1.png'
                break;
            case 3:
                idSelec('comImg').src='./src/IMG/scissor1.png'
                break;
        }
    }

    reset(){
        this.score=0;
        this.keepRunning=true;
        idSelec('score').innerHTML=`0`;
    }

    

    mainFunc(userVal){
        this.randomValue();
        this.logic(userVal,this.compValue);
        this.userValue=userVal;
        this.check();
        console.log(this.compValue+','+this.userValue);
        this.updateDom();
    }

}