var obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
  };
  
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + " - зарплата " + obj[key] + " долларов.");
    }
  }