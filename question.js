class Question{

    constructor(){
        this.title=createElement("h1")
        this.question=createElement("h3")
        this.option1=createElement("h4")
        this.option2=createElement("h4")
        this.option3=createElement("h4")
        this.option4=createElement("h4")
        this.input=createInput("Give your name please")
        this.input2=createInput("give your answer here")
        this.button=createButton("submit")

    }
    hide(){
        
        this.input.hide()
        this.input2.hide()
        this.button.hide()
        this.title.hide()
        
        

    }

    display(){
        this.title.html("MoiQuiz Game")
        this.title.position(350, 0)

        this.question.html("Question:- What is the most feared tank of ww2?")
        this.question.position(150, 80)
        this.option1.html("1: m4a3 Sherman")
        this.option1.position(150,100)
        this.option2.html("2: Tiger-1")
        this.option2.position(150, 120)
        this.option3.html("3: Tiger-2 AKA King tiger")
        this.option3.position(150,140)
        this.option4.html("4: Jagdtiger")
        this.option4.position(150,160)

        this.input.position(150,230)
        this.input2.position(350,230)
        this.button.position(290,300)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.input2.hide()
            this.button.hide()
            this.title.hide()
            contestant.name=this.input.value()
            contestant.answer=this.input2.value()
            contestantCount+=1
            contestant.index=contestantCount
            contestant.update()
            contestant.updateCount(contestantCount)
        })

    }


        
}