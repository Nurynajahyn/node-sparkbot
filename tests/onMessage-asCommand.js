//
// Copyright (c) 2016-2019 Cisco Systems
// Licensed under the MIT License 
//

/* 
 * a Webex Teams webhook that leverages a simple library (batteries included)
 * 
 * note : this example requires that you've set a ACCESS_TOKEN env variable 
 *  
 */

var SparkBot = require("../sparkbot/webhook");

// Starts your Webhook with default configuration where the Webex Teams API access token is read from the ACCESS_TOKEN env variable 
var bot = new SparkBot();

bot.onMessage(function (trigger, message) {

    //
    // ADD YOUR CUSTOM CODE HERE
    //  
    console.log("new message from: " + trigger.data.personEmail + ", text: " + message.text);

    var command = bot.asCommand(message);
    if (command) {
        console.log("detected command: " + command.keyword + ", with args: " + JSON.stringify(command.args));
    }
});

