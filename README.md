# Cart-App

This is a simple cart application made using React Js. A JSON server is used to store the required data for the app.

## Run the app

Clone the repository to your local folder. Open the folder in the editor. Go to the path of the folder in the terminal and run the below code to run the app:
`npm start`
This will start the app in the default port 3000. The app will open in your default browser after compilation. The link of the app run in local host will be:
'http://localhost:3000/'

## Run the JSON server
Now in another terminal start the JSON server. Since the app is running in the default port 3000, we need to specify another port in which the JSON server can run. In this project port number 7000 is used to start the JSON server. In the new terminal run the following to start the server:
`cd data`
`json-server --watch db.json --port 7000`

