Coding Project for UCLA CS35L

Final Grade: 97%

How to run the github code:
git clone https://github.com/alexanderchen750/CS35L.git
 into directory of choice

 Ensure you have yarn, node, and react installed.

Run First

    npm install

Run the following Command to install packages 

  npm run install-dependencies

Then Run The following command to input .env keys and variables

  npm run setup

If you run into issues with script permissions run

  chmod +x setUp.js

To start Project, Run:

  npm start
 

Troubleshooting. If you are not able to get the project running this way, you can try the following.

    1. npm install
    2. cd frontend
    3. npm install
    4. yarn add react-scripts eslint-plugin-react-refresh --dev
    5. cd ..
    6. cd backend
    7. npm install
    8 Add A .env file to the backend and add the following enviromental variabels with the right keys
        a. PORT
        b. SECRET
        c. BUCKET_NAME
        d. REGION
        e. ACCESS_KEY
        f. SECRET_ACCESS_KEY
        g. MONGODB_CONNECT
    9. Go back to frontend and check package.json to make sure theirs a line "proxy" and set proxy to whatver you put for PORT
        ex. PORT = 4000
            "proxy": "http://localhost:4000"
    10. Cd backend and run
            npm run dev
        Cd frontend and run
            npm start

 
