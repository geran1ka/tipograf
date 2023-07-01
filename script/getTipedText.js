/*
export const getTipedText = (str) => {
  const pravila = {
    'step1' : [/(^|\s)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s/gi, '$1$2&nbsp;'],
    'step2' : [/©/gi, '&copy;'],
    'step3' : [/#|№/gi, '&#8470;'],
    'step4' : [/\s-\s/gi, '&nbsp&mdash; '],
    'step5' : [/«|(?<=\s)"/gi, '&laquo;'],
    'step5' : [/»|(?<=\S)"/gi, '&raquo;'],
  }
  let newStr = str
  for (let key in pravila) {
    newStr = newStr.replace(pravila[key][0], pravila[key][1])
  }
  return newStr
};
*/
const rules = [
  {regExp: /(^|\s)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s/gi, value: '$1$2&nbsp;'},
  {regExp: /©/gi, value: '&copy;'},
  {regExp: /(?<!(&))(#|№)/gi, value: '&#8470;'},
  {regExp: /\s-\s/gi, value: '&nbsp&mdash; '},
  {regExp: /«|(?<=\s)"/gi, value: '&laquo;'},
  {regExp: /»|(?<=\S)"/gi, value: '&raquo;'},
];
export const getTypografer = rules => text => rules.reduce((result, {regExp, value}) => result.replace(regExp, value), text);
export const getTipedText = getTypografer(rules)

/*
export const getTipedText = (str) => {
  const regexpStepOne = /(^|\s)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s/gi
  const regexpFiveStepTwo = /©/gi;
  const regexpFiveStepThre = /#|№/gi;
  const regexpFiveStepFour = /\s-\s/gi;
  const regexpFiveStepFive = /«|(?<=\s)"/gi;
  const regexpFiveStepSix = /»|(?<=\S)"/gi;
  
  let newStr = str.replace(regexpStepOne, '$1$2&nbsp;')
  newStr = newStr.replace(regexpFiveStepTwo, '&copy;')
  newStr = newStr.replace(regexpFiveStepThre, '&#8470;')
  newStr = newStr.replace(regexpFiveStepFour, '&nbsp&mdash; ')
  newStr = newStr.replace(regexpFiveStepFive, '&laquo;')
  newStr = newStr.replace(regexpFiveStepSix, '&raquo;')
  return newStr

  */