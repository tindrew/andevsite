

let myTitle = ["Debugalizer", "Pixel Pusher", "Programmer", "Key Puncher", "Coder", "Cyberpunk", 
"Nerd", "Hacker", "Techie", "Engineer", "Bracket Tosser", "Comma Forgetter"]

//function will loop through myGreeting and every two seconds show the 
//next line

let currentIndex = 0
let aSpan = document.getElementById('title')


setInterval(() => {

  aSpan.innerHTML = myTitle[currentIndex]
  currentIndex++
 
  
  if(currentIndex === 11)
  
    currentIndex = 0
   
},2000);








// var textArray= ["text1","text2","text3","text4"];
// var counter = 0;
// var myGreeting = document.getElementById("h2TagId"); // change this 
// var imgTag = document.pic1;
// var end = imgArray.length - 1;

// function changeGreeting() {
//     if (counter == end){
//         counter = 0;    
//     }
//     else {
//         counter++;
//     }
//     myGreeting.innerHTML = textArray[counter];
//     setTimeout(changeGreeting, 2000);
// }
// setTimeout(changeGreeting, 2000);


// window.onload = function() {
//   window.setTimeout(fadeOut, 8000)
// }

// function fadeOut() {
//   document.getElementById('fadeOut').style.opacity = '0'
// 