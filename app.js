// write code here
let score = prompt("Please enter the student score:");

if (score === "") alert("Please enter the score");
else if (!isNaN(+score)) {
    score = +score;
    if (score >= 80) alert("Congratulations, Your grade is 'A'");
    else if (score >= 70 && score <= 79) alert("Well done, Your grade is 'B'");
    else if (score >= 60 && score <= 69) alert("Keep going, Your grade is 'C'");
    else if (score >= 50 && score <= 59) alert("Need more practice, Your grade is 'D'");
    else if (score >= 0 && score <= 49) alert("Not pass, Your grade is 'F'");
    else alert(`Is that your score, actually? \nPlease recheck your score`);
} else alert("The received score is not number");