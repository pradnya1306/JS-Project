let day=require("readline-sync")
var day1=day.question("enter the day")
var meal=day.question("enter the mael")
switch (day1){
    case "monday":
    
        switch(meal){
            case "breakfast":
                console.log("poha")
                break;
            case "lunch":
                console.log("roti")
                break;
            case "dinner":
                console.log("rajma chawal")
        }
        break;
    case "tuesday":
        switch(meal){
            case "breakfast":
                console.log("upma")
                break;
            case "lunch":
                console.log("curry&roti")
                break;
            case "dinner":
                console.log("pulav")
        }
        break;
    case "wendsday":
        switch(meal){
            case "breakfast":
                console.log("maggi")
                break;
            case "lunch":
                console.log("bitter guard")
                break;
            case "dinner":
                console.log("puri")
        }
        break;
    case "thursday":
        switch(meal){
            case "breakfast":
                console.log("bhel")
                break;
            case "lunch":
                console.log("potato curry")
                break;
            case "dinner":
                console.log(" shrikhand puri")
        }
        break;
    case "friday":
        switch(meal){
            case "breakfast":
                console.log("")
                break;
            case "lunch":
                console.log("rich guard")
                break;
            case "dinner":
                console.log("chapati")
        }
        break;


}