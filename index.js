function showGrade() {
    // prompt user to enter student mark
    let mark = prompt("Please enter the student's mark (between 0 and 100):");
  
    // check if input is valid
    if (mark < 0 || mark > 100) {
      alert("Invalid input! Please enter a mark between 0 and 100.");
      return;
    }
  
    // calculate grade based on mark
    let grade;
    if (mark > 79) {
      grade = "A";
    } else if (mark >= 60 && mark <= 79) {
      grade = "B";
    } else if (mark >= 50 && mark <= 59) {
      grade = "C";
    } else if (mark >= 40 && mark <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // display grade
    document.getElementById("result").innerHTML = "The student's grade is: " + grade;
  }

  function checkSpeed() {
    const speed = document.getElementById('speed').value;
    const points = Math.floor((speed - 70) / 5);
    
    if (speed < 70) {
      console.log('Ok');
    } else if (points > 12) {
      console.log('License suspended');
    } else {
      console.log('Points: ' + points);
    }
  }
