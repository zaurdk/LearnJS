var data = {
    "Рыбы": {
      "Форель": {},
      "Щука": {}
    },
  
    "Деревья": {
      "Хвойные": {
        "Лиственница": {},
        "Ель": {}
      },
      "Цветковые": {
        "Берёза": {},
        "Тополь": {}
      }
    }
  };

   function createTreeDom(obj) {
    if (isObjectEmpty(obj)) return;

    var ul = document.createElement('ul');

    for (var key in obj) {
      var li = document.createElement('li');
      li.innerHTML = key;

      var childUl = createTreeDom(obj[key]);
      if (childUl) li.appendChild(childUl);

      ul.appendChild(li);
    }
    return ul;
  }

  function isObjectEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  function createTree(container, obj) {
    container.appendChild(createTreeDom(obj));
  }


  var container = document.getElementById('container');
  createTree(container, data);