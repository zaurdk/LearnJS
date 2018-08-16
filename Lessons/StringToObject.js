let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;
//замена дефиса на Кэмэл Кейс
function camelCase(word) {
  if (word.indexOf('-') > 1){
    let index = word.indexOf('-', 1);
    let ccWord = word.slice(0, (index)) + word[index + 1].toUpperCase() + word.slice((index + 2));
    return ccWord;
  } else return word;
}

function styleToObject(str) {
  let obj = {};
  str = str.trim(); 
  let arr = str.split('\n');

  for (i = 0; i < arr.length; i++) {
    let prop = arr[i].split(':');
    let propKey = camelCase(prop[0].trim());
    let propValue = camelCase(prop[1].slice(0, prop[1].length - 1).trim()); //дополнительно удаляем точку с запятой в конце
    
    obj[propKey] = propValue;  
  } 

  return obj;
}  

console.log(styleToObject(style));

