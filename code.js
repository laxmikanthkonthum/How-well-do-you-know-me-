
var readlinesync = require('readline-sync');

var userName = readlinesync.question('May I have your name? ');
console.log("Hi " + userName + '! :-) Thanks for your time')
if( readlinesync.keyInYNStrict("Do you think you know me well?")){
  console.log("You seem Confident!, Lets check how well you me")
}
else{
  console.log(" No worries!! You can know about me now")
}
var score = 0;
function play(question,answer){
  var userAnswer = readlinesync.question(question)
  //toLowerCase()
  if (userAnswer.toLowerCase() == answer.toLowerCase()){
  //if (tolowercase(userAnswer) == tolowercase(answer)){
    console.log("You are right: Score +1")
    score = score +1;
  }
  else{
    console.log("You are wrong")
    console.log("The correct Answer is:" + answer)
  }
  console.log('----------------------------------------')
}
var queArr = [{question: "Where do I work? ",answer: "ADP"},{question: "* What is my Surname? ", answer: "KONTHUM"},{question: "What is my fav Dish?" ,answer: "BIRYANI"}]
for (i=0;i < queArr.length ; i++){
  console.log("* Here is question: "+ (i+1))
  play(queArr[i].question,queArr[i].answer)
}
console.log("Your Final Score is: " + score);
