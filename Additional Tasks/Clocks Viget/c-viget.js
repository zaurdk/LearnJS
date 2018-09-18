'use strict';

class Clock {
    constructor (obj) {
    this.elem = obj.elem;
  }
  
    _render() {  
      var date = new Date();
    
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
    
      var min = date.getMinutes();
      if (min < 10) min = '0' + min;
    
      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;
    
      this.elem.children[0].innerHTML = hours;
      this.elem.children[1].innerHTML = min;
      this.elem.children[2].innerHTML = sec;      
    } 
    
    stop () {
      clearInterval(this._timer);
    };
    
    start () {
      this._render();
      var self = this;
      this._timer = setInterval(function() {
        self._render();
      }, 1000);
    }
}