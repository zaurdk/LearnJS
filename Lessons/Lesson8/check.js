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