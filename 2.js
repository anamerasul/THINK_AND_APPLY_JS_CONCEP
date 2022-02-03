let MyorderName1 =prompt();
let MyorderQuantiyValue1=prompt();
MyorderQuantiyValue1=parseInt(MyorderQuantiyValue1);

console.log(typeof MyorderQuantiyValue1)
// document.write(typeof MyorderQuantiyValue2)
// document.write(MyorderQuantiyValue2)

const MyorderUpdate1=(pandaPizza(MyorderName1,MyorderQuantiyValue1) );
document.write(MyorderUpdate1);