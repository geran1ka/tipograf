// 1. Вам дан массив с именами файлов
// ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js']
// Напишите функцию которая может перебрать такой массив и отфильтрует его оставив только имена файлов с расширениями .js .jsx .ts
const arrOne = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
const regexpOne = /(jsx?|ts)\b/gi
const getRegExpFilter = (arr, regexp) => arr.filter(item => item.match(regexp));

const resultOne = getRegExpFilter(arrOne, regexpOne);

//console.log('resultOne: ', resultOne);

// --------------------------------------------------------------------------------
// 2. Напишите регулярное выражение, которое находит email адреса:
// До символа @ email может содержать не менее одного символа класса \w.
// После символа @ и до .(точки), после которой начинается домен, может содержать только буквы и быть не короче трех символов.
// После .(точки) может содержать только буквы и быть от 2 до 5 символов в длину.

const regexpTwo = /^\w{1,}@[a-z]{3,}.[a-z]{2,5}$/
const arrTwo = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io', 'my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz']
const resultTwo = arrTwo.filter(item => item.match(regexpTwo));
//console.log('resultTwo: ', resultTwo);

// ---------------------------------------------------------------------------------
// 3. Напишите регулярное выражение, которое находит текст в скобках
// Проверьте на этом примере

const regexpThree = /\([^\(]+\)/gi
const str = `Здоровый (праздничный) ужин вовсе не
  обязательно должен состоять из шпината, гречки 
  и вареной куриной грудки. Самыми лучшими способами
  приготовления еды (по мнению моей мамы) являются
  следующие: варка на пару, запекание или варка в
  воде. Помимо стандартных мандаринов и ананасов,
  отличным украшением любого стола станут необычные,
  экзотические фрукты(например: личи, рамбутан, тамаринд).
  Здоровой может быть даже выпечка, если она приготовлена на пару.`
const resultThree = str.match(regexpThree);
//console.log('resultThree: ', resultThree);

//-----------------------------------------------------------------------------------------
// 4. Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег
// домены вида http://site.ru, https://site.com на 

const strFour = 'http://site.ru https://site.com';
const regexpFour = /http(s)?:\/\/([a-z]+\.[a-z]+)\b/gi
const resultFour = strFour.replace(regexpFour, '<a href="$&">$2</a>');
//console.log('resultFour: ', resultFour);

//-------------------------------------------------------------------------------------------
// Типограф 
// 1. После предлогов ставится неразрывной пробел  
// (в, без, до, для, за, через, над, по, из, у, около, под, о, про, на, к, перед, при, с, между)
const strFive = `#3
Имеется спорная точка зрения, «гласящая примерно следующее: независимые государства могут быть призваны к ответу. Повседневная практика показывает, что перспективное планирование прекрасно подходит для реализации вывода текущих активов. Безусловно, понимание сути ресурсосберегающих технологий однозначно фиксирует необходимость позиций, занимаемых участниками в отношении поставленных задач. Приятно, граждане, наблюдать, как интерактивные прототипы разоблачены. Вот вам яркий пример современных тенденций - дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития.
© "Версусозеро"
`
//console.log(strFive.replace(/«|(?<=\s)"/gi, '&laquo;'));

const regexpStepOne = /(^|\s)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s/gi
const regexpFiveStepTwo = /©/gi;
const regexpFiveStepThre = /#|№/gi;
const regexpFiveStepFour = /\s-\s/gi;
const regexpFiveStepFive = /«|(?<=\s)"/gi;
const regexpFiveStepSix = /»|(?<=\S)"/gi;

let result = strFive.replace(regexpStepOne, '$1$2&nbsp;')
result = result.replace(regexpFiveStepTwo, '&copy;')
result = result.replace(regexpFiveStepThre, '&#8470;')
result = result.replace(regexpFiveStepFour, '&nbsp&mdash; ')
result = result.replace(regexpFiveStepFive, '&laquo;')
result = result.replace(regexpFiveStepSix, '&raquo;')

console.log('result: ', result);

/*
const getTipedText = (str) => {
  const pravila = {
    'step1' : [/(^|\s)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s/gi, '$1$2&nbsp;'],
    'step2' : [/©/gi, '&copy;'],
    'step3' : [/#|№/gi, '&#8470;'],
    'step4' : [/\s-\s/gi, '&nbsp&mdash; '],
    'step5' : [/«|/gi, '&laquo;'],
    'step5' : [/»/gi, '&raquo;'],
  }
  let newStr = str
  for (let key in pravila) {
    newStr = newStr.replace(pravila[key][0], pravila[key][1])
  }
  return newStr
}
const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.tipograff.value = getTipedText(form.tipograff.value);
})

*/