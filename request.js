const axios = require('axios');
const fs=require("fs")
const s=require('readline-sync')
axios.get('https://api.merakilearn.org/courses')
   .then(resp=>{
       let data=(resp.data)
       let m=JSON.stringify (data,null,4)
       fs.writeFileSync("course.json",m) 

       console.log("courses names are: ")
        serial_no=1
        for (i of data){
            console.log(`${serial_no}.${i["name"]}-${i["id"]}`)
            serial_no+=1
        }
        choose=s.questionInt("which course do you want choose :  ")
        choose1=choose-1
        console.log(`${data[choose1]["name"]}-${data[choose1]["id"]}`)
        
        h=axios.get("https://api.merakilearn.org/courses/"+data[choose1]["id"]+" "+ "/exercises")
        .then(response=>{
            let data2=response.data
            let p=JSON.stringify(data2,null,4)
            fs.writeFileSync("course_exercise.json",p)

            serial_number2=1
            serial_number3=1
        
            parent_exe=[]
            child_exe=[]
            for(j of data2["course"]["exercises"]){
                if (j["parent_exercise_id"]==null){
                    console.log(`${serial_number2}.${j["name"]}`)
                    console.log(`   ${serial_number3}.${j["slug"]}`)
                    serial_number2+=1
                    parent_exe.push(j)
                    child_exe.push(j)
                }
                else if(j["parent_exercise_id"]==j["id"]){
                    console.log(`${serial_number2}.${j["name"]}`)
                    parent_exe.push(j)
                    serial_number2+=1
                    new_no=1
                }
                else{
                    console.log(`   ${new_no}.${j["name"]}`)
                    child_exe.push(j)
                    new_no+=1
                }   
            }

            list1_data=JSON.stringify(parent_exe,null,4)
            fs.writeFileSync("parent_exercise.json",list1_data)
            list2_data=JSON.stringify(child_exe,null,4)
            fs.writeFileSync("child_exercise.json",list2_data)
            parent=s.questionInt("enter the parent exercise do want:")

            for (k of parent_exe){
                if (k["parent_exercise_id"]==k["id"]){
                    console.log(parent_exe[parent-1]["name"])
                    break
                }
                // else if (k["parent_exercise_id"]!=k["id"]){
                //     console.log(parent_exe[parent-1]["name"])
                //     console.log(parent_exe[parent-1]["content"])
                //     break
                // }
            }
            child_sre_no=1
            child_content_list=[]
            child_name_list=[]
            for (m of child_exe){
                if(m["parent_exercise_id"]==parent_exe[parent-1]["id"]){
                    console.log(` ${child_sre_no}.${m["name"]}`)
                    child_sre_no+=1
                    child_name_list.push(m["name"])
                    child_content_list.push(m["content"])
                }
            }
            child=s.questionInt("enter the child exercise do want:")
            for (w=0;w< child_content_list.length;w++){
                if ((child-1)==w){
                console.log(child_name_list[child-1])
                console.log(child_content_list[child-1])
            }
        }
            

        
        })
   })
















   