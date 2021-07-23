class Quiz{

constructor(){


}

getState(){
    database.ref('gameState').on("value",function(data){gameState=data.val()})
}

update(state){
    database.ref('/').update({gameState:state})
}

async start(){
    if(gameState===0){
        contestant = new Contestant()
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
        question = new Question();
        question.display();
    }
}

play(){
    question.hide()
    background("yellow")
    textSize(30)
    text("Resulot of the quiz",300,500)
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
        var displayAnswer= 230
        fill("red")
        text("correct answer is written in green color",100,230)
        for(var plr in allContestants){
            var correctAnswer="3"
            if(correctAnswer==allContestants[plr].answer){
                fill("green")
            }else{
                fill("red")
            }
            displayAnswer+=30
            textSize(20)
            text(allContestants[plr].name+" : "+allContestants[plr].answer,250,displayAnswer)
        }
        
    }
    
}





}