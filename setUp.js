const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const dotenv = require('dotenv');

const envPath = path.join(__dirname, 'backend', '.env'); 
const frontendPackageJsonPath = path.join(__dirname, 'frontend', 'package.json'); 


const existingEnv = dotenv.config({ path: envPath }).parsed || {};
let backendPort;

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
    when: () => !existingEnv.MONGODB_CONNECT, 
  },
  {
    type: 'input',
    name: 'SECRET',
    message: 'Enter Encryption String:',
    when: () => !existingEnv.SECRET, 
  },
  {
    type: 'input',
    name: 'BUCKET_NAME',
    message: 'Enter AWS Bucket Name:',
    when: () => !existingEnv.BUCKET_NAME,
  },
  {
    type: 'input',
    name: 'REGION',
    message: 'Enter AWS Bucket Region:',
    when: () => !existingEnv.REGION, 
  },
  {
    type: 'input',
    name: 'ACCESS_KEY',
    message: 'Enter AWS Bucket Access Key:',
    when: () => !existingEnv.ACCESS_KEY,
  },
  {
    type: 'input',
    name: 'SECRET_ACCESS_KEY',
    message: 'Enter AWS Bucket Secret Access key:',
    when: () => !existingEnv.SECRET_ACCESS_KEY,  }

]).then(answers => {

  const updatedEnv = { ...existingEnv, ...answers };
  backendPort = answers.PORT;

  const envContent = Object.entries(updatedEnv)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');


  fs.writeFileSync(envPath, envContent);

  if (backendPort) {
    const packageJsonData = JSON.parse(fs.readFileSync(frontendPackageJsonPath, 'utf8'));
    packageJsonData.proxy = `http://localhost:${backendPort}`;
    fs.writeFileSync(frontendPackageJsonPath, JSON.stringify(packageJsonData, null, 2));
    console.log(`Updated frontend package.json proxy to use port ${backendPort}.`);
  }


  console.log('Updated .env file with your API keys.');
});
