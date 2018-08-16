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

function styleToObject(str) {
    var pos = 0;
    var obj = {};

    while (true) {
         var keyWordStart = str.indexOf('\n', pos);
         var keyWordStop = str.indexOf(':', keyWordStart);
         var valueStart = keyWordStop + 2;
         var valueStop = str.indexOf(';', valueStart);

        if (keyWordStart == -1) break;

        var keyWord = str.slice(keyWordStart + 1, keyWordStop);
        var value = str.slice(valueStart, valueStop);
    
        obj[keyWord] = value;
    
        pos = pos + 1; 

    }

    return obj;  
 
}

console.log(styleToObject(style));