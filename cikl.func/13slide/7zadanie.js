var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log("Ключ: " + key + ", Значение: " + obj[key]);
  }
}