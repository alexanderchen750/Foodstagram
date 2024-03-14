How to run the github code:
git clone https://github.com/alexanderchen750/CS35L.git
 into directory of choice
Cd to CS35L cd to Frontend.
-double check you have nodejs and yarn installed
 Via npm -v and node -v
Ensure you  Download yarn, nodejs, and react if not installed

npm install --global yarn

Download these scripts
yarn add react-scripts eslint-plugin-react-refresh --dev


Running the backend

cd to backend
npm install
In you .env file in the backend, add the following
1. PORT=4000 <-- 4000 is arbitraty, can be whatever
2. MONGODB_CONNECT= your db conection string!!ONLY FOR DEV!!
npm run dev

To Connect Frontend to Backend in Dev:
Ensure that in the frontend, you have "proxy" : "http://localhost:4000" <-- 4000 should just be whatever number is in your PORT


