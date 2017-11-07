var a = Number(prompt('Your number')).toString();
var    result = [];
  var  start = a.length;
  var  end;
while((end = start) > 0){
    start = end - 2;
      result.unshift(a.substring(start, end)); 
}

document.write(result);