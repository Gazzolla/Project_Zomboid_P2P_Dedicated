const greenworks = require("./greenworks/greenworks")

if (greenworks.init())
  console.log('Steam API has been initialized.');

 var result = greenworks.createLobby(2,16)

 var test= greenworks.inviteUserToLobby(result, 76561198260280015);

 console.log(test)