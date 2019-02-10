#!/usr/bin/env node

var fs = require('fs');
var fsPromises = require('fs').promises;
var fse = require('fs-extra');
var path = require('path');

//name passed in command line
let startLocation = process.argv[2];
 //For this example copy into the comand line:
 // node cli /myFolder/someSubFolder/twoDeepFolder/underground/someOriginalText.java'
let finishLocation = "/myBetterFinishedFolder";

let customWord = '_calc';
let boiler = '/boilerCode.java';
let pathParts = startLocation.split('/');
let nameOfStartFileSplitType = pathParts[pathParts.length - 1].split(".");
let nameOfStartFile = nameOfStartFileSplitType[0];
let typeOfFile = nameOfStartFileSplitType[1];
let finishPath = finishLocation;
let finishPathFun = function(pathParts){
  pathParts.pop();
  pathParts.forEach(function(folder){
    return finishPath = finishPath += (folder + "/");
  });
};
let specificItemsArray = [];
let specificText = "";

finishPathFun(pathParts);


let buildFinishPath = fse.ensureDir(__dirname + finishPath, 0777).then(() => {
  let insertBoilerCode = fs.copyFile(__dirname +    '/boilerCode.java', __dirname + finishPath + nameOfStartFile + "Test." + typeOfFile, (err) => {
    if (err) throw err;
  });
  console.log("boilerCode inserted");
}).then(() => {
  let buildCustomText = fs.createReadStream(__dirname + startLocation, {encoding: 'utf8'});
  buildCustomText.on("data", (data) => {
    populateSpecificItemsArray(data.toString());
    return newTextWithSpecifics(specificItemsArray);
  });
});

//Grabing all the instances of Something you want to extract
//In the case of testing maybe building a list of all Calc's Used
let populateSpecificItemsArray = function(stringData){
  let words = stringData.split(' ');
  words.forEach(function(word){
    if(word.includes(customWord)){
      specificItemsArray.push(word);
    }
  });
  return specificItemsArray;
};

//Creating sentaces or even tests around the words you extracted
let newTextWithSpecifics = function(specificItemsArray){
  specificItemsArray.forEach(function(item){
    return specificText += "Your Custom Text regarding " + item + " stuff /n";
  });
  fsPromises.appendFile(__dirname + finishPath + nameOfStartFile + "Test." + typeOfFile, specificText).then(() => {
    console.log("File updated successfully");
  }).catch (error => {
    console.error(error);
  });
};

//I am leaving these two in for user debugging.
// let boilerCode = fs.createReadStream(__dirname + boiler, {encoding: 'utf8'});
// boilerCode.on("data", (data)=>{
//   console.log('boiler data = '+ data.toString());
//   return data.toString()
// });
//
// let readStartText = fs.createReadStream(__dirname + startLocation, {encoding: 'utf8'});
// readStartText.on("data", (data)=>{
//   console.log('data = '+ data.toString());
// });
