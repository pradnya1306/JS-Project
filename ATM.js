console.log("****welcome in SBI ATM****")
console.log(("insert your card"))
let language1=require("readline-sync")
var language=language1.question("enter your language(1)English (2)hindi  : ")
if (language=="1"||"2"){
    var pin=language1.questionInt("please enter your pin : ")
    var confirm_pin=language1.questionInt("please reenter your pin : ")
    console.log("please wait....\ncheck your pin")
    var a=1234
    var saving_balance=50000
    var current_balance=4000
    var credit_card=100000
    if (confirm_pin==pin){
        console.log(" your pin is correct ")
        var transaction=language1.question("select transaction(1)cash withdrawl (2)balance enquiry (3)change pin number:"  )
        if (transaction=="1"){
            var amount=language1.questionInt("enter your amount")
            var account=language1.question("select your account (1)saving (2)current account (3)credit card: ")
            if (account=="1"){
                console.log("confirm")
                console.log("transaction in progress")
                console.log("take your money")
                var rebal=saving_balance-amount
                console.log("avilable balance is", rebal)
                var receipt=language1.question("do you want receipt? : ")
            }
            else if (account=="2"){
                console.log("confirm")
                console.log("transaction in progress")
                console.log("take your money")
                var rebal1=current_balance-amount
                console.log("available balance is Rs.", rebal1)
                receipt=language1.question("do you want receipt? : ")
            }
            else if (account=="3"){
                console.log("confirm")
                console.log("transaction in progress")
                console.log("take your money")
                var rebal2=credit_card-amount
                console.log("avilable balance is",rebal2)
                var receipt=language1.question("do you want receipt? : ")
            }
            else{
                console.log("invalid account")
            }
        }
        else if (transaction=="2"){
            var account=language1.question("select your account : ")
            if (account=="1"){
                console.log("Available balance is", saving_balance)
                console.log("thank you for using SBI ATM")
                var receipt=language1.question("do you want receipt? : ")
            }
            else if (account=="2"){
                console.log("Available balance is", current_balance)
                console.log("thank you for using SBI ATM")
                var receipt=language1.question("do you want receipt? : ")
            }
        }
        else if (transaction=="3"){
            var newpin=language1.questionInt("please enter new pin : ")
            var newpin1=language1.questionInt("please re-enter your pin : ")
            console.log("transaction complete")
            console.log("please take your card")
        }
    }
    else{
        console.log("wrong your pin number")
        }  
}
else{
    console.log("thank you")
}
