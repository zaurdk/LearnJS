var goods = ['Джаз', 'Блюз'];

console.log(goods);
goods.push('Рок-н-Ролл')
console.log(goods);
goods[goods.length - 2] = 'Классика';
console.log(goods);
alert(goods.shift());
console.log(goods);
goods.unshift('Регги');
goods.unshift('Рэп');
console.log(goods);

/* Джаз, Блюз
Джаз, Блюз, Рок-н-Ролл
Джаз, Классика, Рок-н-Ролл
Классика, Рок-н-Ролл
Рэп, Регги, Классика, Рок-н-Ролл */