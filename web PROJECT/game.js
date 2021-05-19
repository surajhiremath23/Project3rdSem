var docPs0=document.getElementById('pScore-0');
var docPs1=document.getElementById('pScore-1');
var PScore=0,CScore=0,TCScore;
var activePlayer=1;
var gamePlaying=false;
document.getElementById('red1').style.display='block';
document.getElementById('red0').style.display='none';
document.getElementById('comturn').style.display='none';
document.getElementById('yourturn').style.display='none';
document.querySelector('.btn1').addEventListener('click', function () {
    if(gamePlaying){
        buttonWork(1);
    }
});
document.querySelector('.btn2').addEventListener('click', function () {
    if(gamePlaying){
        buttonWork(2);
    }
    
});
document.querySelector('.btn3').addEventListener('click', function () {
    if(gamePlaying){
        buttonWork(3);
    }
    
    
});
document.querySelector('.btn4').addEventListener('click', function () {
    if(gamePlaying){
        buttonWork(4);
    }
    
});
document.querySelector('.btn5').addEventListener('click', function () {
    if(gamePlaying){
        buttonWork(5);
    }
    
});
document.querySelector('.btn6').addEventListener('click', function () {
    if(gamePlaying){
        buttonWork(6);
    }
    
});

function ComScore(){
    TCScore=Math.floor(Math.random()*6)+1;
    document.getElementById('pScore-0').textContent=TCScore;
}
function checkResult(TScore){
    
        if(TCScore===TScore){
            if(CScore<PScore){
                document.getElementById('name1').textContent='Winner';
                gamePlaying=false;
                document.getElementById('red0').style.display='none';
                CScore-=TScore;
            }
                
            else if((CScore-TScore)===PScore){
                console.log('Draw');
                gamePlaying=false;
                document.getElementById('red0').style.display='none';
                CScore-=TScore;
            }
                
        }
        if(gamePlaying){
            if(CScore>PScore){
            document.getElementById('name0').textContent='Winner';
            gamePlaying=false;
            document.getElementById('score-0').textContent=CScore;
            document.getElementById('red0').style.display='none';
        }
        }
}
function Active(){
    if(activePlayer===0){
        document.getElementById('comturn').style.display='block';
        document.getElementById('yourturn').style.display='none';
        document.getElementById('red0').style.display='block';
        document.getElementById('red1').style.display='none';
    }
    else{

        document.getElementById('red1').style.display='block';
        document.getElementById('red0').style.display='none';
    }
}

function buttonWork(btn){
    docPs1.textContent=btn;
    ComScore();
    if(activePlayer===1){
        if(TCScore!==btn){
            PScore+=btn;
            document.getElementById('score-1').textContent=PScore;
        }
        else{
            activePlayer=0;
        }   
    }
    else{ 
        CScore+=TCScore;
        checkResult(btn);
        document.getElementById('score-0').textContent=CScore;
        
        
    }
    Active();
}
function toggleSidebar(){
    document.getElementById('sidebar').classList.toggle('active');
}

document.getElementById('newgame').addEventListener('click',function(){
    if(document.getElementById('name').value){
        document.getElementById('pname').textContent=document.getElementById('name').value;
        document.getElementById('name').style.display='none';
        document.getElementById('newgame').style.display='none';
        document.getElementById('reset').style.display='block';
        document.getElementById('alertmsg').style.display='none';
        gamePlaying=true;
        document.getElementById('yourturn').style.display='block';
    }
    else
        document.getElementById('alertmsg').style.display='block';
    
});
document.getElementById('reset').addEventListener('click',function(){
   PScore=0;
   CScore=0;
   activePlayer=1;
   gamePlaying=false;
   document.getElementById('reset').style.display='none';
   document.getElementById('name').style.display='block';
   document.getElementById('newgame').style.display='block';
   document.getElementById('pScore-1').textContent='0';
   document.getElementById('pScore-0').textContent='0';
   document.getElementById('score-1').textContent='0';
   document.getElementById('score-0').textContent='0';
   document.getElementById('pname').textContent='Player';
   document.getElementById('name0').textContent='Computer';   
   document.getElementById('name').value='';
    document.getElementById('comturn').style.display='none';
document.getElementById('yourturn').style.display='none';
   document.getElementById('red1').style.display='block';
   document.getElementById('red0').style.display='none';
  
});