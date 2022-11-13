
//QUESTION 1


const question1 = document.getElementById('answer1');
const btn1Question =document.getElementById('question1');

btn1Question.onclick= function(){

 if(question1.style.display === "block"){
        question1.style.display="none";
    }else{
        question1.style.display="block";
    } 
  //  question1.style.display=(question1.style.display  == "none")?"block":"none";
//console.log(question1);
}



const question2 = document.getElementById('answer2');
const btn2Question =document.getElementById('question2');

btn2Question.onclick= function(){
 
    if(question2.style.display === "block"){
        question2.style.display="none";
    }else{
        question2.style.display="block";
    } 
   //  question1.style.display=(question1.style.display  == "none")?"block":"none";
}

const question3 = document.getElementById('answer3');
const btn3Question =document.getElementById('question3');

btn3Question.onclick= function(){

    if(question3.style.display === "block"){
        question3.style.display="none";
    }else{
        question3.style.display="block";
    } 
   //  question1.style.display=(question1.style.display  == "none")?"block":"none";
}