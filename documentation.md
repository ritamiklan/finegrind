# Documentation of the project
## Tools
This project was originally started on a Windows environment, but now the further development happens on a MacOS. Since it is a cross-platform development, it doesn’t matter what OS the de-veloper is using, as long as the libraries are available.
### Visual Studio Code
This project uses the latest version of VS Code, the 1.74.2 Universal version. This is a simple and free IDE that fits the purpose well. For formatting the code and keeping it consistent, the Prettier Code Formatter extension is recommended.
###	Terminal
A terminal is a basic tool for this (or any) project, to run the package manager, add libraries, and manage the git repository.
### npm
The project uses npm package manager. The current version used is 8.15.0
### GitHub
GitHub is used for version control. The 2 branches are main and dev. The main branch is protected and code can only be merged with a pull request to avoid accidentally pushing code to the main branch. The dev branch is the dev environment. The git workflow is as follows:
-	All new edits and changes are done on the dev branch. Since only one developer is working on the project, there is no need for checking out feature branches from the dev branch, un-less otherwise decided on a case-by-case basis.
-	When the code reaches a stable state when a new feature is added, it can be merged to main
-	After merging to main, the code needs to be pulled to the local environment and the dev branch rebased, so the dev and main point to the same commit.
Another branch in existence is the startingpoint, which is a read-only branch to keep the state of the code at the start of the thesis project.
### Expo
This app is created and bundled with Expo. It uses the current latest version of Expo SDK 47.
Downloading also the Expo Go mobile app is recommended for live testing the project on an actual device, without the need for downloading or installing anything else.
Expo also has packages to allow access to the device’s functionalities.
Quick start with Expo:
```
npm install --global expo-cli
npx create-expo-app my-app
```

## Libraries
### React and React Native
The Expo command will set up the project already installing these two libraries with the latest stable version which is compatible with the Expo SDK. Currently the Expo SDK 47 supports React 18.1.0 and React Native 0.70.5
These libraries are essential for building anything, and they give the basics of the whole app.
### Firebase
The project uses Firebase for authenticating and storing user data.
```
npm install firebase
npm install --save @react-native-firebase/app ??? – not sure if this is needed, will have to test it
```

Link to the setup documentation: https://firebase.google.com/docs/web/setup
### dotenv
The dotenv library loads environment variables from a .env file from the root folder. It is a safe way to store secrets, such as API keys, or links, that should not be accessed by end users or others. 
To set it up, run this command in a terminal.
`npm install -D react-native-dotenv`
Might have to run also:
`npm install dotenv react-native-dotenv expo-constants`
After adding the dotenv library, we need to set it up like so: 
Add this snippet in the babel.config.js file under the presets line:
```
plugins: [
	["module:react-native-dotenv", {
	"moduleName": "@env",
	"path": ".env"
	}],
	]
```
Add a .env file in the root directory, where you add your environment variables, for example:
	`API_URL = http://apiurl.com`
Also add .env to your .gitignore file, so it doesn’t get pushed into the GitHub repository.
Create a `.env_template` file as well, where you add what variables you are using (without the actual keys or links) as a future reference, if you need to recreate your `.env` file.
Then you can create a `Config.js` file in the utils folder, where you create an import and export
```
Config.js: 
import {API_URL} from "@env";
export default {API_URL};
```

Now you can use the API_URL variable in the codebase everywhere where you need to access your API url.
### React Native Navigation
The app uses react native navigation, more precisely stack navigation. For this, 2 libraries need to be added:
-	react-navigation/native: ^6.1.1
-	react-navigation/native-stack: ^6.9.7
For this, run these commands in the terminal:
npm install @react-navigation/native-stack
npm install @react-navigation/native

### React Native Maps
`npm install react-native-maps`

https://github.com/react-native-maps/react-native-maps/blob/HEAD/docs/installation.md
