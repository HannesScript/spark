#!/usr/bin/env node

// Require necessary modules
const { exec } = require('child_process');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask a question and get an answer
const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question + ' ', (answer) => {
      resolve(answer);
    });
  });
};

// Main function
const main = async () => {
  try {
    // Execute command to get Node.js version
    exec('node -v', async (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }

      // Collect project data
      const data = {};
      data.name = await askQuestion('What is the name of your project?');
      data.framework = await askQuestion('Which framework?');

      // Output the collected data
      console.log(data);

      // Close readline interface
      rl.close();
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    rl.close();
  }
};

// Run the main function
main();
