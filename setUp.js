const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const dotenv = require('dotenv');

const envPath = path.join(__dirname, 'backend', '.env'); // Adjust the path to your .env file

// Load existing .env file
const existingEnv = dotenv.config({ path: envPath }).parsed || {};

inquirer.prompt([
  {
    type: 'input',
    name: 'PORT',
    message: 'Enter Desired Port for Backend:',
    when: () => !existingEnv.PORT,
  },
  {
    type: 'input',
    name: 'MONGODB_CONNECT',
    message: 'Enter Your MongoDb URI:',
    when: () => !existingEnv.MONGODB_CONNECT, // Adjust the condition based on your needs
  },
  {
    type: 'input',
    name: 'SECRET',
    message: 'Enter Encryption String:',
    when: () => !existingEnv.SECRET, // Adjust the condition based on your needs
  },
  {
    type: 'input',
    name: 'BUCKET_NAME',
    message: 'Enter AWS Bucket Name:',
    when: () => !existingEnv.BUCKET_NAME, // Adjust the condition based on your needs
  },
  {
    type: 'input',
    name: 'REGION',
    message: 'Enter AWS Bucket Region:',
    when: () => !existingEnv.REGION, // Adjust the condition based on your needs
  },
  {
    type: 'input',
    name: 'ACCESS_KEY',
    message: 'Enter AWS Bucket Access Key:',
    when: () => !existingEnv.ACCESS_KEY, // Adjust the condition based on your needs
  },
  {
    type: 'input',
    name: 'SECRET_ACCESS_KEY',
    message: 'Enter AWS Bucket Secret Access key:',
    when: () => !existingEnv.SECRET_ACCESS_KEY, // Adjust the condition based on your needs
  }
  // Add other API keys or variables here
]).then(answers => {
  // Merge new answers with existing environment variables
  const updatedEnv = { ...existingEnv, ...answers };

  // Convert the updated environment variables object back to .env file format
  const envContent = Object.entries(updatedEnv)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  // Write the updated content back to the .env file
  fs.writeFileSync(envPath, envContent);

  console.log('Updated .env file with your API keys.');
});
