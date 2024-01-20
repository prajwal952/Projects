console.log("connected");

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
console.log(buttons);


console.log("1")
buttons.forEach( function(button){
    console.log("2")
     console.log(button)
    button.addEventListener('click',function(e){
        console.log("3")
        console.log(e);
        console.log("4")
        console.log(e.target);

        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
          }

    })

});
