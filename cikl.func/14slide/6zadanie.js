let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let output = '';

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === 5 || i === 6) { 
    output += '<b>' + daysOfWeek[i] + '</b>';
  } else {
    output += daysOfWeek[i];
  }
  output += '<br>';
}