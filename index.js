const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
 
  return tutorials.map((line) => {
    const first = line.split(" ")
    const firstCapital = first.map(
      capital => capital.charAt(0).toUpperCase() + capital.slice(1))
      const output = firstCapital.join(" ")
      return output
  } )
  

}


// const arr = str.split(" ")
// for(const i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
// }
// const arr2 = arr.join(" ")
// console.log(arr2)