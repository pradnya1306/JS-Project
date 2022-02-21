const string=require("readline-sync")
function storng_password(password){
        if ( password.length>6 && password.length<16){
            if (password.includes("#") || password.includes("@")){
                if (password.match(/[0-9]/g)){
                    if (password.match(/[a-z]/g)){
                        if(password.match(/[A-Z]/g)){
                            console.log("it is storng password")
                            qwe= password
                            console.log(qwe);
                        }
                        else{
                            console.log(password,"At least password should contain one upper case letter")
                            password=string.question("enter your 1st password : ")
                            storng_password(password)
                    }
                }
                else{
                    console.log(password,"At least password should contain one lower case letter")
                    password=string.question("enter your 1st password : ")
                    storng_password(password)
            }
        }
                else{
                    console.log(password,"At least password should contain one number")
                    password=string.question("enter your 1st password : ")
                    storng_password(password)
            }
        }
            else{
                console.log(password,"At least password should contain one special character")
                password=string.question("enter your 1st password : ")
                storng_password(password)
            }
        }
        
        else{
                console.log(password,"At least password should length 6 to 16 digit")
                password=string.question("enter your 1st password :")
                storng_password(password)
        }
    }


function checkpassword(qwe,password2){
    if (password2==qwe){
        console.log("password created.")
    }
    else{
        console.log("Both password are not same")
        password2=string.question("enter your confirm password : ")
        checkpassword(qwe,password2)
    }
    }


// // *********code start from here***************

console.log("Welcome to Facebok page")
login_signup=string.question("what you choose (1)signup  or (2)login (give number): ")
const fs=require('fs')
var file=fs.existsSync("pradnya1.json")


if (file==false){
    
    if (login_signup=="1"){
        user_name=string.question("enter your user name : ")
        password1=string.question("enter your 1st password : ")
        storng_password(password1)
        
        password2=string.question("enter your confirm password : ")
        checkpassword(qwe,password2)
        console.log("congrats",user_name,"you are Signed  up Successfully.")
        
        description=string.question("Information about you :")
        date_of_birth=string.question("enter your date of birth (DD-MM-YYYY): ")
        hobbies=string.question("enter your hobies : ")
        gender=string.question("enter your gender (male or female) :")
    }
    mylist=[]
    user={}
    list1=["username","password","description","dob","hobbies","gender"]
    list2=[user_name,qwe,description,date_of_birth,hobbies,gender]
    for (var i = 0 ; i < list1.length ; i++){
        user[list1[i]]=list2[i]
        
    }
    mylist.push(user)
    console.log(mylist)

    fs.writeFileSync("pradnya1.json",JSON.stringify(mylist,null,4))
    console.log(user_name,"your account is successfully created")
}
else if (file==true){
    if (login_signup=="1"){
        user_name=string.question("enter your user name : ")
        password1=string.question("enter your 1st password : ")
        storng_password(password1)
        password2=string.question("enter your confirm password : ")
        checkpassword(qwe,password2)
        
        data1=fs.readFileSync("pradnya1.json","utf8")
        
        if (data1.includes(user_name )){
            console.log("This account is already exists")
        }
        else{
            console.log("congrats",user_name,"you are Signed  up Successfully.")
            description=string.question("Information about you : ")
            date_of_birth=string.question("enter your date of birth : ")
            hobbies=string.question("enter your hobies : ")
            gender=string.question("enter your gender (male or female) :")
        
            user={}
            list1=["username","password","description","dob","hobbies","gender"]
            list2=[user_name,qwe,description,date_of_birth,hobbies,gender]
            for (i=0; i<list1.length;i++){
                user[list1[i]]=list2[i]
            }
            data1=fs.readFileSync("pradnya1.json","utf8")
            data=JSON.parse(data1)
            data.push(user)
            fs.writeFileSync("pradnya1.json",JSON.stringify(data,null,4))
        }
    }
    else if(login_signup=="2"){
        login_name=string.question("enter the name : ")
        login_password=string.question("enter the password : ")
        p=fs.readFileSync("pradnya1.json","utf8")
        var data=JSON.parse(p)
        let flag=true
        for (i of data){
            if ((i["username"]==login_name)&&(i["password"]==login_password)){
                    console.log("login successfully")
                    for (m in i){
                        console.log("your",m,"is",i[m])    
                    } 
                    flag=false
                        break     
            }   
        }
        if(flag==true){
            console.log("Invalid user info") 
        } 
        
        }
    } 


