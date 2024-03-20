#! /usr/bin/env node

import inquirer from 'inquirer'

const calculator = await inquirer.prompt ([{

    message: "Enter first number",
    type: "number",
    name: "num1",
},
   { message: "Enter second number",
    type:  "number",
    name: "num2"
},

  { message: "select your operator",
    type: "list",
    name: "operators",
    choices: ["Addition", "Substraction","Multiplication","Division","Percentage","Modulus","Exponent"],
  },]);

  console.log(calculator);

  if (calculator.operators === "Addition"){
    console.log(calculator.num1 + calculator.num2);
  }else if (calculator.operators ==="Subtraction"){
    console.log(calculator.num1 - calculator.num2);
  }else if (calculator.operators ==="Multiplication"){
    console.log(calculator.num1 * calculator.num2)
  }else if (calculator.operators ==="Division"){
    console.log(calculator.num1 / calculator.num2);
  }else if (calculator.operators ==="Percentage"){
    console.log(calculator.num1 / calculator.num2 * 100)
  }else if (calculator.operators === "Modulus"){
    console.log(calculator.num1 %  calculator.num2);
  }else if (calculator.operators ==="Exponent"){
    console.log(calculator.num1 ** calculator.num2);
  }
   
    else  {
    console.log("Please select valid operator")
  };
