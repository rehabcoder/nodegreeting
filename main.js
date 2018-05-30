console.log("starting main.js");

const greetings= require('./greeting.js');
const locations=require('./location.js');

greetings.greetingEnglish();
greetings.greetingJapanese();
greetings.greetingSpanish();
greetings.greetingsSikhi();

//location code

locations.locationEnglish();
locations.locationJapanese();
locations.locationSpanish();
locations.locationSikhi();
