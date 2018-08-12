function rle(value) {
    var counter = 1;
    var arr = [];
  for(var i = 0; i < value.length; i++){
    if(value[i] === value[i+1]){
      counter++;
    }else{
      var result = (value[i] + counter).replace(/1/g,"");
      arr.push(result);
      counter = 1;
    }
  }
  return arr.join().replace(/,/g, "");
}


alert(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));