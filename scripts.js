function validateAnswers() {
    // Get all the radio buttons
    var radios = document.getElementsByTagName('input');
  
    // Initialize a variable to store the number of correct answers
    var numCorrect = 0;
  
    // Loop through all the radio buttons
    for (var i = 0; i < radios.length; i++) {
      // Check if the radio button is selected and has the correct value
      if (radios[i].checked && radios[i].value == "correct") {
        // If so, increment the number of correct answers
        numCorrect++;
      }
    }
  
    // Display the number of correct answers
    alert("You got " + numCorrect + " out of 4 correct!");
  }