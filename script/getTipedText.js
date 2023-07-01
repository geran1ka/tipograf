export const getTipedText = (str) => {
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
};