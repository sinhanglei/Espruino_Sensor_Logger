/*** Below are all the defined functions ***/

// log time and light value into a json file
function logData(lightValue, dateTime) {
  
    var logEntry = {
        time: dateTime,
        light: lightValue
    };
    console.log(require("Storage").getFree());
    var file = require("Storage").open("log.json", "a");
    file.write(JSON.stringify(logEntry) + "\n");
    // for testing: output complete content of log.json to console
    getData();
}

// get logged data from log.json
function getData(){
    var file = require("Storage").open("log.json","r");
    l = file.readLine();
    while (l!==undefined) {
      console.log(l);
      l = file.readLine();
    }
}

// get sensor data, log sensor data and decide sleep duration
function senseLight(dateTime){
  var intervalId = setInterval(function () {

    // get sensor data
    // for testing: random number instead of sensor data
    // Math.random(); //var light =
    var lightValue =  analogRead(A5);

    //log sensor data 
    logData(lightValue, dateTime);

    //if sun is setting down (low light and after 4pm), sleep longer
    if (lightValue > 0.2 ) { // &&  dateTime.getHours() >= 16) {
      clearInterval(intervalId);
      setTimeout(function(){
        senseLight(dateTime);}
                 , 10000);
    }
  }, 2000); // short deep sleeps as default
}

// increment the manually set time by 1 second every second
function updateTime(){
 dateTime.setTime(dateTime.getTime() + 1000); 
}

/*** The "main" starts here ****/

// setup a starting time and update it every second
var dateTime = new Date();
dateTime.setTime((new Date("2024-01-24T16:15:00")).getTime());
setInterval(updateTime, 1000);

//start logging data
senseLight(dateTime);

// activate deep sleep
// for testing: print setDeepSleep(1), because bangle we can't test the real setDeepSleep(1) yet
console.log("setDeepSleep(1);"); 
setSleepIndicator(LED1);
setDeepSleep(1);