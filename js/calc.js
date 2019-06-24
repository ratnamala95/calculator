var queue = [];
var input = 0;

function clearAll(){
  var queue = [];
  var input = 0;
  document.getElementById("answer").innerHTML = "0";
}

function calculation(value){
  console.log(queue,input);
  if (input!==0) {
    input = parseFloat(input);
    addToQueue(input);
    input = 0;
  }
  var answer = value[0];
  var dividedByZero = 0;

  for (var i = 2; i < value.length; i+=2) {
    switch (queue[i-1]) {
      case '+':
          answer+=value[i];
          break;
      case '-':
          answer-=value[i];
          break;
      case '/':if(value[i]===0)  dividedByZero = 1;
          else answer = answer / value[i];
          break;
      case '*':
          answer= answer * value[i];
        break;

    }
  }



  answer = answer.toFixed(2);
  // answer = parseFloat(answer);

  if (dividedByZero === 1){
    clearAll();
    document.getElementById("answer").innerHTML = "ERROR";
  }else {
    document.getElementById("answer").innerHTML = answer;
    input = answer;
    queue = [];
  }

}

function numberButton(arg){

  if(document.getElementById("answer").innerHTML === "ERROR" || document.getElementById("answer").innerHTML == "0"){
    document.getElementById("answer").innerHTML = "";
  }
  input += arg;
  document.getElementById("answer").innerHTML += arg;

}

function operatorButton(arg){
  if (input!=0){
    input = parseFloat(input);
    addToQueue(input);
    addToQueue(arg);
    document.getElementById("answer").innerHTML += arg;/* display operator*/
  }
  input = 0;
  // alert(input);
}

function addToQueue(arg){
  queue.push(arg);
}



/*Event Listeners*/

document.getElementById("clea").addEventListener("click",clearAll);
