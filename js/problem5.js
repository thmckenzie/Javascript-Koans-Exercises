"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here
function writeAnswer(answer) {
    $('div.answer').append($('<div>').text(answer));
}

function updatePaper(){
  var tempArray = new Array();
  var count = 0;

  //loop through the three language arrays
  for(var i = 0; i < arguments[0].length; i++){
  	var currArray = arguments[0][i];

  	//if looping through the urdu array, reverse the array and add to temporary array
  	if(i == 1){
  		for(var z = currArray.length; z > -1; z--){
      	tempArray.push(arguments[0][1][z]);
  		}

  	//else add to temporary array in normal order
  	}else{
  		for(var n = 0; n < currArray.length; n++){
  			tempArray.push(currArray[n]);
  			}
  		}
	}

	//set word count and print words
	count = tempArray.length - 1;
	var print = tempArray.toString();
	console.log("words: " + print);
	console.log("count: " + count);
	//writeAnswer("FINAL: "+ print);
}
updatePaper([["zara", "dhyaan", "dein"], ["mazarat", "cahenge"], ["attention", "please"]]);