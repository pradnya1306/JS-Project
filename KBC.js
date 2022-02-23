console.log("************Welcome to Kaun Banega Crorpati 🙏 ****************  "  )

question_list=["How many continents are there?","What is the capital of India 🇮🇳 ?",
               "NG mei kaun se course padhaya jaata hai?" ]
options_list = [["Four", "Nine", "Seven", "Eight"],
                  ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
                ["Software Engineering", "Counseling", "Tourism", "Agriculture"]]

solution_list = [3, 4, 1]
answer5050=[["(1).Four","(3).seven"],
          ["(2).Bhopal","(4).delhi"],
          ["(1).Software Engineering","(3).Tourism"]]

expert=["Mr.A 🙋🏿","Mr.B 🧏🏿","Mr.C 🤵🏿"]
expert_answer=["(3).seven","(4).delhi","(1).Software Engineering"]
audiyance_vote=[["(1).Four....50%","(2).Nine....70%","(3).Seven....96%","(4).Eight....20%"],
["(1).Chandigarh....10%","(2).Bhopal....67%","(3).Chennai.....37%","(4).Delhi....97%"],
["(1).Software Engineering.....95%","(2).Counseling.....40%","(3).Tourism.....10%","(4).Agriculture....76%"]]

const input=require("readline-sync")
var start=input.question("can we start the game(yes/no) :")
if (start=="yes"){
    i=0
    count=0
    count1=0
    count2=0
    total=0
    while (i<question_list.length){
        console.log("Aapka sawal hai : ")
        console.log("*",question_list[i])
        console.log("Aapke option hai : ")
        n=0
        while (n<options_list[i].length){
            console.log(n+1,")",options_list[i][n])
            n=n+1
        }
        choose_lifeline=input.question("do you want to use lifeline ((1) 50-50,(2) audiyance vote,(3).Expert:")
        if (choose_lifeline=="1"){
            count=count+1
            if (count==1){
                console.log("your option are:")
                p=0
                while (p <(answer5050[i]).length){
                    console.log(answer5050[i][p])
                    p=p+1
                }
                answer=input.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("you won Rs.",total)
                }
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you lost your game")
                    break 
                }
            }
            else{
                console.log("you alraedy use the life line")
                m=0
                while (m<(options_list[i]).length){
                    console.log(m+1,")",options_list[i][m])
                    m=m+1
                }
                    
                answer=input.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
        }
        else if (choose_lifeline=="2"){
            count1=count1+1
            if (count1==1){
                console.log("your option are:")
                z=0
                while (z<(audiyance_vote[i]).length){
                    console.log(audiyance_vote[i][z])
                    z=z+1
                }
                    
                answer=input.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you lost your game")
                    break 
                }
                    
            }
                
            else{
                console.log("you alraedy use the life line")
                m=0
                while (m<(options_list[i]).length){
                    console.log(m+1,")",options_list[i][m])
                    m=m+1
                }
                    
                answer=input.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
                
        }
        else if (choose_lifeline=="3"){
            count2=count2+1
            if (count2==1){
                t=0
                while (t<(expert).length){
                    console.log(t+1,")",expert[t])
                    t=t+1
                }
                    
                expert1=input.questionInt("Please choose your expert : ")
                console.log("you choose",expert[expert1-1])
                console.log("According to",expert[expert1-1],"correct answer is",expert_answer[i])
                answer=input.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
            else{
                console.log("you alraedy use the life line")
                m=0
                while (m<(options_list[i]).length){
                    console.log(m+1,")",options_list[i][m])
                    m=m+1
                } 
                answer=input.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }  
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
                 
                
        }
        else{
            n=0
            while (n<(options_list[i]).length){
                console.log(n+1,")",options_list[i][n])
                n=n+1
            }
                
            answer=input.questionInt("Please enter your answer  : ")
            if (answer==solution_list[i]){
                total=total+10000
                console.log("Congrats ! Your answer is correct.")
                console.log("You won Rs.",total)
            }
                
            else{
                console.log("sorry your answer is wrong. ")
                console.log("you loss your game")
                break
            }
                
        }
            
        i=i+1
    console.log("Thank you to participating Kaun Banega Crorepati")
    console.log("You won Total Rs.",total,"congratulations!")
    console.log("Thank you")

    }
}