

exports.getDate = function(){
   const today= new Date()
   const options={
     weekday: "long",
     day: "numeric",
     month: "long"
  } 
  return today.toLocaleDateString("en-US",options)
}

exports.getDay=function (){
   const today= new Date()
   const options={
     weekday: "long",
  } 
 return today.toLocaleDateString("en-US",options)
}


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