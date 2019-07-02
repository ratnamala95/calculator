var queue = [];
var input = 0;
var result = 0;

function clearAll(){
    queue = [];
    input = 0;
    document.getElementById("answer").innerHTML = "0";
}

function calculation(value){
    if (input !==0) {
      // console.log(input);
    input = parseFloat(input);

        addToQueue(input);
    }
    var answer = value[0];
    var dividedByZero = 0;
    for (  var i = 2; i < value.length; i= i+2) {

        switch (queue[i-1]) {
            case '+':
                answer+= value[i];
                break;
            case '-':
                answer-= value[i];
                break;
            case '/':    if (value[i] === 0)   dividedByZero = 1;
                    else      answer = answer / value[i];

                break;
            case'*': answer = answer * value[i];
                break;
        }

    }

    answer = answer.toFixed(2);
    answer = parseFloat(answer);
    if ( dividedByZero === 1) { clearAll();
        document.getElementById("answer").innerHTML =  "ERROR";}
    else
    {document.getElementById("answer").innerHTML =  answer ;
        input = answer;
    queue = [];}


}

function numberButton(arg){

  if(document.getElementById("answer").innerHTML === "ERROR" || (document.getElementById("answer").innerHTML == "0" && arg != ".")){
    document.getElementById("answer").innerHTML = "";
  }
  input += arg;
  document.getElementById("answer").innerHTML += arg;/*display number*/

}

function operatorButton(arg){
  if (input!==0 && input !== "-"){
    input = parseFloat(input);
    addToQueue(input);
    addToQueue(arg);
    document.getElementById("answer").innerHTML += arg;/* display operator*/
    input = 0;
  }
  if (arg == "-"  && isNaN(queue[0]) && input !== "-"){
    input ="-";
    document.getElementById("answer").innerHTML = "-";
  }
  // alert(input);
}

function addToQueue(arg){
  queue.push(arg);
}

/*test functions*/
// var ar = ["Bilbo", "Gandalf", "Nazgul"];
// ar.forEach((item, index, array) => {
//   alert(`${item} is at index ${index} in ${array}`);
// });

// function compareNum(a,b){
//   if(a>b)return 1;
//   if(a==b)return 0;
//   if(a<b)return -1;
// }
//
let arr = [3,5,8,6,1,2];
// let names = "ridhi,madhav,kannu";
//
// let users = [
//   {age:22},
//   {age:26},
//   {age:32},
// ];
//
// let user = {
//   age:18,
//   younger(otherUser){
//     return otherUser.age<this.age;
//   }
// };
//
// younger = users.filter(user.younger,user);
//
// alert(younger.length);

// alert(arr.reverse());
// alert(arr.sort((a,b)=>a-b));
// alert(names.split(','));
// alert(arr.join(','));
/*test functions end!*/


// function camelize(str){
//   return str
//   .split('-')
//   .map(
//     (word,index)=>index==0?word:word[0].toUpperCase() + word.slice(1)
//   )
//   .join('');
// }
// alert(camelize("my-long-word"));

// function filterRange(arr, a, b){
//   return arr
//   .filter(item => (a<=item && item<=b));
// }
// let filtered = filterRange(arr,6,9);

function rangeFilter(arr,a,b){
  for(i=0;i<arr.length;i++){
    let val = arr[i];
    //remove elements outside of interval instead of keeping the inside ones
    if (val < a || val > b) {
      i--;
      arr.splice(i, 1);
    }
  }
}
rangeFilter(arr,1,5);
alert(arr);
/*Event Listeners*/

document.getElementById("clea").addEventListener("click",clearAll);
