//Script for Simple Interest Calculator
//Author: Boaz Ron Zohar

//Validates that the value of the principal is a positive number
function Validate(){
  var principal = document.getElementById("principal").value;  //gets the principal value
  if (principal <= 0){
    alert("Enter a positive number");
    document.getElementById("principal").focus();  //focus on the input box
    return false;
  }
  else{
  return true;
  }
}

//Updating the interest rate
function updateRate(){
  var rateval = document.getElementById("rate").value;  //gets the interest rate value
  document.getElementById("rate_val").innerText = rateval;  //updates the interest rate
}

//Calculates the interest after number of years
function compute(){
  var principal = document.getElementById("principal").value;  //gets the principal value
  var rate = document.getElementById("rate").value;  //gets the interest value
  var years = document.getElementById("years").value;  //gets the number of years 
  var interest = principal * years * rate / 100;  //calculates the interest
  var year = new Date().getFullYear() + parseInt(years);  //gets the current year and calculates the target year
  var IsPositive = true;  //if true indicates that the value of the principal is a positive number
  IsPositive=Validate();  //checks if the value of the priniciapl is a positive number
  //runs only if the value of the principal is a positive number 
  if(IsPositive){  
      //sets the result
      document.getElementById("result").innerHTML =
      "<br>If you deposit "+
      "<span style = 'background:yellow'>"+principal+"</span>"+  //writes and highlights prinicipal
      ",<br> at an interest rate of "+
      "<span style = 'background:yellow'>"+rate+"%."+"</span>"+  //writes and highlights rate
      "<br>You will receive an amount of "+
      "<span style = 'background:yellow'>"+interest+"</span>"+  //writes and highlights the interest
      ",<br>in the year "+
      "<span style = 'background:yellow'>"+year+"</span>"+  //writes and highlights and the target year
      ".";
  }
}
    
