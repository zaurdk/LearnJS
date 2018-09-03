function winCheck(table) {
    var winner;
      
    for (i=0; i<3; i++) {
      if (
        table.rows[i].cells[0].className === 'zero' &&
        table.rows[i].cells[1].className === 'zero' &&
        table.rows[i].cells[2].className === 'zero'
      ) return true;
  
      if (
        table.rows[i].cells[0].className === 'cross' &&
        table.rows[i].cells[1].className === 'cross' &&
        table.rows[i].cells[2].className === 'cross'
      ) return true;    
  
      if (
        table.rows[0].cells[i].className === 'zero' &&
        table.rows[1].cells[i].className === 'zero' &&
        table.rows[2].cells[i].className === 'zero'
      ) return true;
  
      if (
        table.rows[0].cells[i].className === 'cross' &&
        table.rows[1].cells[i].className === 'cross' &&
        table.rows[2].cells[i].className === 'cross'
      ) return true;
  
      if (
        table.rows[i].cells[i].className === 'zero' &&
        table.rows[i].cells[i].className === 'zero' && 
        table.rows[i].cells[i].className === 'zero'    
      ) return true;
  
      if (
        table.rows[i].cells[i].className === 'cross' &&
        table.rows[i].cells[i].className === 'cross' && 
        table.rows[i].cells[i].className === 'cross'    
      ) return true;
    } 
    
    if (
      table.rows[0].cells[2].className === 'zero' &&
      table.rows[1].cells[1].className === 'zero' &&
      table.rows[2].cells[0].className === 'zero'    
    ) return true;
  
    if (
      table.rows[0].cells[2].className === 'cross' &&
      table.rows[1].cells[1].className === 'cross' &&
      table.rows[2].cells[0].className === 'cross'   
    ) return true;
  
    return false;
  }

  function winCheck() {
    var mas = [];
    for (var i = 0; i < 3; i++) {
      mas.push(rows[i].cells[0].className);
      mas.push(rows[i].cells[1].className);
      mas.push(rows[i].cells[2].className);  
    }
    
    // проверка по горизонтали
    if (mas[0] + mas[1] + mas[2] === 'zerozerozero') return true;
    if (mas[3] + mas[4] + mas[5] === 'zerozerozero') return true;
    if (mas[6] + mas[7] + mas[8] === 'zerozerozero') return true;
    if (mas[0] + mas[1] + mas[2] === 'crosscrosscross') return true;
    if (mas[3] + mas[4] + mas[5] === 'crosscrosscross') return true;
    if (mas[6] + mas[7] + mas[8] === 'crosscrosscross') return true;
    // проверка по вертикали
    if (mas[0] + mas[3] + mas[6] === 'zerozerozero') return true;
    if (mas[1] + mas[4] + mas[7] === 'zerozerozero') return true;
    if (mas[2] + mas[5] + mas[8] === 'zerozerozero') return true;
    if (mas[0] + mas[3] + mas[6] === 'crosscrosscross') return true;
    if (mas[1] + mas[4] + mas[7] === 'crosscrosscross') return true;
    if (mas[2] + mas[5] + mas[8] === 'crosscrosscross') return true;
    // проверка по диагонали
    if (mas[0] + mas[4] + mas[8] === 'zerozerozero') return true;
    if (mas[2] + mas[4] + mas[6] === 'zerozerozero') return true;
    if (mas[0] + mas[4] + mas[8] === 'crosscrosscross') return true;
    if (mas[2] + mas[4] + mas[6] === 'crosscrosscross') return true;
    
    return false;
    }