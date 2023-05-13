// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/03/2023
// This file contains the JS functions for index.html

"use strict"

function integersSent() {

  // Initializing product variable.
  let product = 0;

  // Getting numbers from user.
  let firstNumber = parseInt(document.getElementById("first-number").value);
  let secondNumber = parseInt(document.getElementById("second-number").value);

  // If statement to give an error message if nothing nothing is entered or if numbers are invalid.
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("results").innerHTML = "Please enter valid numbers.";
    return;
  }
  
  // Else (for if numbers are entered).
  else {

    // Take the absolute value to do multiplication
    let firstNumberAbsolute = Math.abs(firstNumber);
    let secondNumberAbsolute = Math.abs(secondNumber);

    // For loop to execute repeated addition that will result in the product.
    for (let counter = 0; counter < secondNumberAbsolute; counter++) {
      product = product + firstNumberAbsolute;
    }
  }

  // If statement to make sure that if one of the numbers is negative, the product will be negative.
  if ((firstNumber < 0 && secondNumber > 0) || (firstNumber > 0 && secondNumber < 0)) {
    product = product * -1;
  }

  // Displaying the product back to the user.
  document.getElementById("results").innerHTML = "The product of your two selected integers (" + firstNumber + " x " + secondNumber + ") = " + product + ".";

}