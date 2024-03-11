function validation(answer, type_of_validation = 0) {
    let isValid = false;
    let maxTries = 3; // Define a maximum number of attempts
  
    while (!isValid && maxTries > 0) {
      if (type_of_validation === 0) {
        if (isNaN(answer) || answer <= 0) {
          alert("Please enter a positive number."); // Inform user about the issue
        } else {
          isValid = true;
          return answer;
        }
      } else if (type_of_validation === 1) {
        if (isNaN(answer) || answer < 0 || answer > 1) {
          alert("Please enter a value between 0 and 1."); // Inform user about the issue
        } else {
          isValid = true;
          return answer;
        }
      }
      answer = Number(prompt("Invalid input. Please re-enter: "));
      maxTries--; // Decrement attempt count
    }
  
    // Handle situation where validation fails after all attempts
    if (!isValid) {
      alert("Failed to get valid input after multiple attempts.");
      // You can throw an error or take other actions here based on your program logic
    }
    return null; // Indicate validation failure
  }

// exercice 1
let answer = prompt("Enter your string");

var p = document.getElementById("ex1");

p.innerHTML = answer;

//exercice 2

let a = 5, b = 7, result = a + b;

alert("the variable result have : " + result);

//exercice 3

let budget = 1200, achats = 300;

if (budget >= achats) {
    document.getElementById('ex2').innerHTML = "you can buy all your stuff";
    
}else{
    document.getElementById('ex2').innerHTML = "you can not buy all your stuff";
}

//exercice 4

let answer2 = Number(prompt(" Exercice 4 : \ngive me the HT price : "));
answer2 = validation(answer2);
document.body.innerText += "the Answer for ex4 is : " +  (1+0.2)*answer2 +"\n"  ;

// exercice 5
let answer3 = Number(prompt("Exercice 5 : \ngive me the HT price"));
answer3 = validation(answer3);

let answer4 = Number(prompt("Exercice 5 : \ngive me the TVA price between 0 and 1"));
answer4 = validation(answer4, 1)

document.body.innerText += "the Answer for ex5 is : " + (1+answer4)*answer3 +"\n";

// exercice 6

answer3 = Number(prompt("Exercice 6 : \ngive me the HT price"));
answer3 = validation(answer3);

answer4 = Number(prompt("Exercice 6 : \ngive me the TVA price between 0 and 1"));
answer4 = validation(answer4, 1)

if ((1+answer4)*answer3 > 100) {
    document.body.innerHTML += "<p style='color:red'>the Answer for ex6 is : " + (1+answer4)*answer3 +"</p>";
}else{
    document.body.innerHTML += "<p style='color:green'>the Answer for ex6 is : " + (1+answer4)*answer3 +"</p>";
}

//exercice 7
