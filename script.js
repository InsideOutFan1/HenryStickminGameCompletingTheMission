// Import necessary libraries
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the game options
const options = [
  "Distract Guards",
  "Airship",
  "Teleporter"
];

// Define the game logic
function playGame() {
  console.log("Henry Stickmin: Completing the Mission");
  console.log("Choose your decision:");
  
  // Display the options
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
  
  // Get user input
  rl.question("Enter your choice (1-3): ", (choice) => {
    const selectedOption = parseInt(choice);
    
    // Handle the user's choice
    switch (selectedOption) {
      case 1:
        console.log("You chose to Distract Guards.");
        // Add logic for the Distract Guards option
        break;
      case 2:
        console.log("You chose the Airship.");
        // Add logic for the Airship option
        break;
      case 3:
        console.log("You chose the Teleporter.");
        // Add logic for the Teleporter option
        break;
      default:
        console.log("Invalid choice. Please try again.");
        playGame();
    }
    
    // Close the readline interface
    rl.close();
  });
}

// Start the game
playGame();
