// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/03/2023
// This file contains the JS functions for index.html

"use strict"

function productNumbers()

// Initializing variable for product to zero.
  let product = 0;

// Getting the two integers from the user that will be used to calculate their product.
  let firstNumber = parseInt(document.getElementById("first-number").value);
  let secondNumber = parseInt(document.getElementById("second-number").value);

// If, textfields are empty or invalid
  if ((isNaN(firstNumber)) || (isNaN(secondNumber)) || (isEmpty(firstNumber)) || (isEmpty(secondNumber))){
  message = "Ensure that both numbers are entered.";
  
// Getting the absolute value to do multiplication.
  let absoluteFirstNumber = Math.abs(firstNumber);
  let absoluteSecondNumber = Math.abs(secondNumber);

// For loop to repeated addition to determine the product.
  for (let counter = 1; counter <= absoluteSecondNumber; counter++) {
    product = product + absoluteFirstNumber;
  }

 // If, the first number is greater than zero....
  if (firstNumber < 0) {
    product = product * -1;
  }


  // If, the second number is greater than zero.....
  if (secondNumber < 0) {
    product = product * -1;
  }

  // Displaying the product back to the user.
  document.getElementById("results").innerHTML = "The product of your selected two numbers is " + product + ".";
}