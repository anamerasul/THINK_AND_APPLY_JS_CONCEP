function sumOfNumbers(num1,num2,num3){
                    let result=num1+num2+num3;

                    return result;

}
const number1=20;
const number2=30;
const number3=60;

const myNumber=sumOfNumbers(number1,number2,number3);
console.log(myNumber);

// var name= "p Hero";

//write a simple function that takes a parameter and then return a custom message.

function msgGenerator(name){
                    let message="hello"+" "+ name +" "+"WELCOME"
                    return message;

}

const myName=msgGenerator("Tonmoy")
console.log(myName);
// console.log(myName);
//write a function for a food delivery service that sells pizza only this function takes the foodname & quqntiy as parameter and then return a custom message with order info.this function shouldbe smart enough to handle wrong parameter input.



function pandaPizza(foodName,foodQuantity){

                    if (foodName.toLowerCase() != 'pizza'){
return "please input pizza "


          } 
          
          else if(foodQuantity<0 ){
                              return"plese select positive value";
          }
          else if(foodQuantity>10 ){
                              return "Overbook please try some time more"

          }

          else if(typeof foodQuantity!="number"){
                              return "Please input valid number"
          }

          {
                              const eachPizzaprice =50;
                              const totalPrice =eachPizzaprice*foodQuantity;
                    //           const yourmessage=" And takes your pizza "
                    //           const yourMainMessage="PLEASE PAY"+" "+totalPrice +" "+"TAKA"+yourmessage;
                    const message ='order sucessfuly, order info: '+foodName.toLowerCase()+" "+ 'price:' +totalPrice+ '$';

                              return message ;

                            

          }
         

}
const MyorderName ="Pizza";
const MyorderQuantiyValue=6;

const MyorderUpdate=(pandaPizza(MyorderName,MyorderQuantiyValue) );
console.log(MyorderUpdate)
// console.log(MyorderUpdate)



// console.log(pandaPizza("PIZZA",1) );

let personName={
                    name:'rumon',
                    age:23
}


console.log(personName.name)
