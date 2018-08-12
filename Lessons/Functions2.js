var x = prompt('Введите число', '0');
var n = prompt('Введите степень, в которую хотите его возвести', '2');

function pow(x,n) {    
    return (x**n);
  };
if (n <= 0) {
    alert('Степень не поддерживается');
} else {
  alert( pow(x,n) );
}