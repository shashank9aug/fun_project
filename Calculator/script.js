var box = document.getElementById('display');

function onDisplayScreen(x){
  box.value += x;
  if(x === 'c'){
    box.value = '';
  }
}

function answer(){
  var x = box.value;
  x = eval(x);
  box.value = x;
}

function change(){
  var num = box.value;
  if(num < 0){
    var newNum = Math.abs(num);
  }
  else{
    newNum = -Math.abs(num);
  }
  box.value = newNum;
}

function backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0, len);
  box.value = newNum;
}