const express = require("express")

const bodyParser = require("body-parser");


const app = express()

var items=[ "Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');

app.use(
    bodyParser.urlencoded({
     extended: true
    })
)

app.get("/",(req,res)=>{
     
    var today= new Date()
    // var currentDay = today.getDay();
    // var day ="";

    // if(currentDay === 6 || currentDay===0){
    //      day="weekend";

    // } else{
    //     day="weekday";
        
    // }
    // switch (currentDay) {
    //     case 0:
    //         day="Sunday"
    //         break;
    //     case 1:
    //         day="Monday"
    //         break;
    //     case 2:
    //         day="Tuesday"
    //         break;
    //     case 3:
    //         day="Wednesday"
    //         break;
    //     case 4:
    //         day="Thursday"
    //         break;
    //     case 5:
    //         day="Friday"
    //         break;
    //     case 6:
    //         day="Saturday"
    //         break;
    //     default:
    //       console.log("Error: current day is equal to:"+currentDay)  
    //         break;
    // } 
    //  <% if(KindOfDay === "Saturday" || KindOfDay === "Sunday"){%>
    //     <h1 style="color:rebeccapurple;"><%=KindOfDay %> ToDo List</h1>
    
    //     <% }else{ %> 
    //        <h1 style="color: blue;"><%= KindOfDay %> ToDo List</h1>
    //    <%}%> 

    var options={
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",options)
      

    res.render("list",{
        KindOfDay:day,
        newListItems:items
    })  
 
})

app.post("/",(req,res)=>{
    var item =req.body.newItem
    
    items.push(item) 

    res.redirect("/")
})

app.listen(3000,()=>{
    console.log("server started on port:3000")
})