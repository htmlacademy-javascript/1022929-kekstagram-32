
/*Функция для проверки длины строки.*/

const string = function (line, maxLength) {
  const lineLength = line.length;

  if (lineLength <= maxLength){
    return true;
  }
  return false;
};

string('запишите результат в переменную', 100);


/*Функция для проверки, является ли строка палиндромом.*/


function palindromCheck (str) {
  const normalString = str.replaceAll(' ','').toUpperCase();
  const stringLength = normalString.length;
  let rewersString = '';

  for (let index = stringLength - 1; index >= 0; index--) {
    rewersString += normalString[index];
  }
  return normalString === rewersString;

}

palindromCheck('Лёша на полке клопа нашёл');
palindromCheck('топот');
palindromCheck('Кекс');
