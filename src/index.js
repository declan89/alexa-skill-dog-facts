'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Dog Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "There are more than 150 dog breeds",
    "There are 7 main dog classes: sporting, hound, working, terrier, toy, non-sporting, and herding",
    "The most popular name for a dog is Max. Other popular names include Molly, Sam, Zach, and Maggie",
    "Dogs can vary in size from over 150 pound Great Dane to a 2 pound Chihuahua",
    "Puppies can be adopted at 8 weeks of age.  Until then, they should stay with their moms",
    "Contrary to popular belief, dogs do not sweat by salivating. They sweat through the pads of their feet",
    "Dogs have over 200 million scent receptors. Humans have only 5 million",
    "Former US President Teddy Roosevelt had a Pit Bull named Pete",
    "An adult dog has 42 teeth",
    "If a dog isn’t spayed or neutered, a female dog, her mate and their offspring can product 67,000 dogs in 6 years",
    "A St Bernard mountain rescue dog named Barry saved 40 lives",
    "Only the Chow Chow and the Shar pei have black tongues",
    "The Poodle haircut was originally meant to improve the dog’s swimming abilities as a retriever, with the pom-poms left in place to warm their joints",
    "The top five favorite breeds of dogs in the US are Labrador Retriever, Golden Retriever, German Shepherd, Beagle, and Dachshund",
    "The Basenji is the only barkless dog in the world",
    "Greyhounds can reach a speed of up to 45 miles per hour",
    "All dogs, regardless of breed, are direct descendants of wolves and technically of the same species"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a dog fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
