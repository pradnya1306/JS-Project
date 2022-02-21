console.log("     Welcome to Kaun Banega Crorpati    "  )

question_list=["How many continents are there?","What is the capital of India?",
               "NG mei kaun se course padhaya jaata hai?" ]
options_list = [["Four", "Nine", "Seven", "Eight"],
                  ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
                ["Software Engineering", "Counseling", "Tourism", "Agriculture"]]

solution_list = [3, 4, 1]
answer5050=[["(1).Four","(3).seven"],
          ["(2).Bhopal","(4).delhi"],
          ["(1).Software Engineering","(3).Tourism"]]


let s=require('readline-sync')
start=s.question("can we start the game(yes/no) :")
if (start=="yes"){
    console.log("Aapka sawal hai : ")
    console.log()
    i=0
    count=0
    while (i<question_list.length){
        console.log("Aapka sawal hai : ")
        console.log(question_list[i])
        console.log("Aapke option hai : ")
        n=0
        while (n<options_list[i].length){
            console.log(n+1,options_list[i][n])
            n=n+1
        }
        choose_lifeline=s.question("do you want to use (50-50)lifeline :")
        if (choose_lifeline=="yes"){
            count=count+1
            if (count==1){
                console.log("your option are:")
                p=0
                while (p <(answer5050[i]).length){
                    console.log(answer5050[i][p])
                    p=p+1
                }
                answer=s.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    console.log("Congrats ! Your answer is correct.")
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
                    console.log(m+1,options_list[i][m])
                    m=m+1
                }
                answer=s.questionInt("Please enter your answer  : ")
                if (answer==solution_list[i]){
                    console.log("Congrats ! Your answer is correct.")
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
                console.log(n+1,options_list[i][n])
                n=n+1
            }
            answer=s.questionInt("Please enter your answer  : ")
            if (answer==solution_list[i]){
                console.log("Congrats ! Your answer is correct.")
            }
            else{
                console.log("sorry your answer is wrong. ")
                console.log("you loss your game")
                break
            }
        }
        i+=1
    }
}