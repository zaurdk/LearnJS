'use strict';

class ListSelect {
    constructor (options) {
        this.list = options.elem;
    }

    select(li) {  
        li.classList.toggle('selected'); 
    }

    selectOne(li){
        clearll();
        li.classList.add('selected');
    }

    clearAll() {
        Array.from(this.list.children).forEach(elem=>{elem.classList.remove('selected')});
    }
}