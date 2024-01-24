let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 3;
let output = '';

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === day - 1) { 
    output += '<i>' + daysOfWeek[i] + '</i>';
  } else {
    output += daysOfWeek[i];
  }
  output += '<br>';
}
document.getElementById('result').innerHTML = output;