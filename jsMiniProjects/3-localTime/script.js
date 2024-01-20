console.log("connected");

const time=document.querySelector("#clock")

setInterval(function(){
let date =new Date();
 time.innerHTML=date.toLocaleTimeString();

},1000)


//this 1000 is 1 sec its in milli seconds