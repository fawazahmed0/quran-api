// Coverts numbers insides a string to other language number
// str is the string
// zeroFrom is the zero number from the language you want to convert
// zeroTo is the zero number of the languague you want to convert to

function LangNum2Num(str,zeroFrom,zeroTo){
   // Get the UTF-16 code points of zeros
  codezeroFrom = (""+zeroFrom).codePointAt(0)
  codezeroTo = (""+zeroTo).codePointAt(0)

  // Make array containing codepoints from 0 to 10 for the language
  var FromArr = [...Array(10).keys()].map(e=>codezeroFrom+e)
  var ToArr = [...Array(10).keys()].map(e=>codezeroTo+e)

// Split the string into array, if we catch a number, we will return number from destination language
return str.split('').map(e=>FromArr.includes(e.codePointAt(0)) ? String.fromCodePoint(ToArr[FromArr.indexOf(e.codePointAt(0))]) : e ).join('')

}


val = LangNum2Num("जिनसे आप कुछ ९० सीख सकते ३४ हैं हम लाये हैं ७ आपके लिये कुछ","०",0)
console.log(val)
