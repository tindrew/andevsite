

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


