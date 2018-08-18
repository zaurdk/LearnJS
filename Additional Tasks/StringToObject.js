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
  let parts = word.split('-')
  return parts.reduce(function (result, part) {
    return result += part[0].toUpperCase() + part.slice(1);
  });
}

function styleToObject(str) {
  let obj = {};
  str = str.trim(); 
  let arr = str.split(';').filter(Boolean);

  console.log(arr);

  for (i = 0; i < arr.length; i++) {
    let prop = arr[i].split(': ');
    console.log(prop);
    let propKey = camelCase(prop[0].trim());
    let propValue = (prop[1].trim()); 
    
    obj[propKey] = propValue;  
  } 

  return obj;
}  

console.log(styleToObject(style));

