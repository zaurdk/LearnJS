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

   function createTreeHTML(obj) {
    var li = '';
    var ul = '';

    for (var key in obj) {
        li += '<li>' + key + createTreeHTML(obj[key]) + '</li>'
    }

    if (li) {
        var ul = '<ul>' + li + '</ul>'
      }
      return ul || '';
 
  }

  function createTree(container, obj) {
    container.innerHTML = createTreeHTML(obj);
  }


  var container = document.getElementById('container');
  createTree(container, data);