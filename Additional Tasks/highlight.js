function highlight(table) {
let trS = table.querySelectorAll('tr');

for (i=1; i<trS.length; i++) {
    if (trS[i].children[3].hasAttribute('data-available')) {
        trS[i].children[3].getAttribute('data-available') === 'true' ? 
        trS[i].classList.add('available') :
        trS[i].classList.add('unavailable');
    } else trS[i].hidden = true;

    trS[i].children[2].innerHTML === 'm' ? trS[i].classList.add('male') : trS[i].classList.add('female');
    
    if (+trS[i].children[1].innerHTML < 18) trS[i].setAttribute('style', 'text-decoration: line-through');
}
}

highlight(document.querySelector('.js-teachers'));