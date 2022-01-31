var quesArr = [
    {
      num: 1,
      question: "HTML stand for.....?",
      options: {
        a: "Hyper text markup Language",
        b: "Hyper text programming Language",
        c: "Hyper text styling Language",
        d: "Hyper text scripting Language",
      },
      correctAns: "Hyper text markup Language",
    },
    {
      num: 2,
      question: "Which type of JavaScript Languages is",
      options: {
        a: "Object-Oriented ",
        b: "Object-Base",
        c: "Assembly Languages",
        d: "high Level",
      },
      correctAns: "Object-Base",
    },
    {
      num: 3,
      question: "The 'function' and  'var' are known as:",
      options: {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
      },
      correctAns: "Declaration statements",
    },
    {
      num: 4,
      question: "who is the present president of pakistan",
      options: {
        a: "Arif Alvi",
        b: "Imran Khan",
        c: "Nawaz Sharif",
        d: "Zardari",
      },
      correctAns: "Arif Alvi",
    },
    {
      num: 5,
      question: "How many prayers in a day:",
      options: {
        a: "6",
        b: "5",
        c: "3",
        d: "none",
      },
      correctAns: "5",
    },
    {
        num: 6,
        question: "How many prayers in a day:",
        options: {
          a: "6",
          b: "5",
          c: "3",
          d: "none",
        },
        correctAns: "5",
      },
  ];





///get ques element
var uiQuestion = document.getElementById("question")

///get Option element
var Quizoption = document.getElementsByClassName("Quizoption")

var nextBtn = document.getElementById("nextBtn");

var mtotalQues = document.getElementById("totalQues");
var mcorrectAns = document.getElementById("correctAns");
var mwrongQues = document.getElementById("wrongQues");
var resultBox = document.getElementById("resultBox");
var currentQues = document.getElementById("current");
var total = document.getElementById("total");
var result = document.getElementById("res")
var mainBox = document.getElementsByClassName("mainBox")[0]
////set onclick event options
for(var i = 0 ; i < Quizoption.length ; i++){
    Quizoption[i].setAttribute("onclick" , "checkAnswer(this)")
}



var index = 0
var Scorecounter = 0
var wrongCounter = 0

////onload function///
function startQuiz(){
    //set ques 
    
    uiQuestion.innerHTML = quesArr[index].question

    ///set options
    Quizoption[0].innerHTML = quesArr[index].options.a
    Quizoption[1].innerHTML = quesArr[index].options.b
    Quizoption[2].innerHTML = quesArr[index].options.c
    Quizoption[3].innerHTML = quesArr[index].options.d

    nextBtn.style.display = "none"
  
    //set current and total
    total.innerHTML = quesArr.length
    currentQues.innerHTML = quesArr[index].num
}



function nextQues(){
    
  if( index < quesArr.length -1){
    index++
    startQuiz()

  }else{
    console.log("khatam....");
    resultBox.style.display = "block"
    mainBox.style.display = "none"
    mtotalQues.innerHTML = quesArr.length
    mcorrectAns.innerHTML = Scorecounter
    mwrongQues.innerHTML = wrongCounter


  }
    // console.log(quesArr.length)
      
    for(var i = 0 ; i<Quizoption.length ; i++){
      Quizoption[i].style.pointerEvents = "visible"
      Quizoption[i].style.backgroundColor = "transparent"

  }
}


function checkAnswer(li){
    
    if(li.innerHTML === quesArr[index].correctAns){
        console.log("true ans")
        Scorecounter++
        console.log("Scorecounter" , Scorecounter);
        li.style.backgroundColor = "green"
      }else{
        wrongCounter++
      console.log("false");
      li.style.backgroundColor = "red"
      
    }
      
    for(var i = 0 ; i<Quizoption.length ; i++){
        Quizoption[i].style.pointerEvents = "none"
    }
    nextBtn.style.display = "block"

}


// var now = new Date().getTime();
// var elapsed = new Date().getTime() - now;
// document.getElementById("timer").innerHtml = elapsed;
// if (elapsed > 300000 /*milliseconds in 5 minutes*/) {
//   alert ("5 minutes up!");
//   //take whatever action you want!
// }

var min = document.getElementById("min")
var sec = document.getElementById("sec")


let minjs = 4;
let secjs = 59;
min.innerHTML = minjs

var interval = setInterval(function(){
    --secjs
    sec.innerHTML = secjs
      if(secjs == 0){
      --minjs
       secjs = 59
      min.innerHTML = minjs
    }
    if(minjs < 0){
        resultBox.style.display = "block";
        resultBox.style.backgroundColor = "white";
        resultBox.style.top = "50%";
        resultBox.style.left = "50%";
        resultBox.style.transform = "translate(-50% , -50%)";
        resultBox.style.position = "absolute";
        resultBox.style.width = "450px";
        resultBox.style.padding = "25px 30px";
        result.style.textAlign = "center"
        result.style.fontSize = "20px"
        result.style.color = "#007bff"
        mainBox.style.display = "none";
        mtotalQues.innerHTML = quesArr.length
        mcorrectAns.innerHTML = Scorecounter
        mwrongQues.innerHTML = wrongCounter
    }



} , 1000)