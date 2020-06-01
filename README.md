# Custom Discord RichPresence

### Setup & Installation
**Preface:**
*You will need to have node.js version 10 or higher for this to work*
*You should have pm2 installed so the app does not need command prompt/powershell/a terminal window open*
*You will need to have a Discord App created for this, read below for how to do this*

**Discord App Creation:**
1. Create a new Discord App [here](https://discord.com/developers/applications)
2. Make sure to choose a good name as this is what will show on Discord
3. Once created, go to your app and click on the "Rich Presence" tab
   1. Upload your image with a lowercase name (Discord will rename it to lowercase automatically)
   2. Make sure to hit save
   3. Set the name of the file in `config.js` under the setting `lImgKey`
4. Go back to "General Information" and get the "Client ID"

**Installation and Running:**
1. Download the files for this app [here](https://github.com/WaitroseDev/Discord-Custom-RichPresence/archive/master.zip)
2. Unzip the zip file (I personally recommend 7-zip)
3. Open a new command prompt/terminal window in the folder
4. Run `npm install`
5. Modify the config.js file to have whatever `state` you want and to set the `lImgKey`
6. Change the Client ID in `main.js` to whatever your Rich Presence ID is
7. In your Command Prompt window, run `pm2 start main.js --name"CustomPresence"`
