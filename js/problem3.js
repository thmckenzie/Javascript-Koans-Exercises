"use strict";

/*
 Problem 3:

 Background:
 Auto rickshaws are a very common mode of transportation in India. They are typically fitted with a meter that tracks
 the auto fare, based on distance traveled and waiting time (eg: when stuck in traffic jam). If it is night time, an
 extra charge of 50% is levied.

 http://en.wikipedia.org/wiki/Auto_rickshaw#India

 Problem statement:
 Write a program that will compute the auto fare: it should take as arguments the distance traveled in kilometers (d),
 the waiting time in minutes (w), and whether it is night time (n). The assumed auto fare formula is:
 20 + 8 * (d-1) + 4 * w
 Add 50%, if n=true

 (Please note that the above formula is make-belief! Please don't get into a fight with an auto-walla over this formula!)

 Examples:

 Given the kilometers traveled is 6
 And the minutes spent waiting in a traffic jam is 8
 And it was day time
 When the end of the journey is reached
 Then the meter displays the total fare as Rs 92

 Given the kilometers traveled is 3.5
 And the minutes spent waiting in a traffic jam is 4
 And it was night time
 When the end of the journey is reached
 Then the meter displays the total fare as Rs 84

*/

/*
function changeElementText(element, answer) {
    $(element).text(answer);
}

function fareForRide(distanceTraveled, timeWaiting, isNight) {
    changeElementText("#distanceTraveled", "some");
    changeElementText("#timeWaiting", "some");
    changeElementText("#nightOrDay", "night or day");
    var fare = "some amount";

    // write some code here!

    changeElementText("#fare", fare);
}

*/




//BELOW IS CODE COPIED FROM JSFIDDLE
// helper function for output
function writeAnswer(answer) {
    $('div.answer').append($('<div>').text("Rs " + answer));
}

function computeFareHelper(distance, time){
	var tempTotal = 20 + 8 * (distance -1) + 4 * time;
  return tempTotal;
}

function computeFare(distance, time, isNightTime){
	var answer;

  if(isNightTime){
  	var tempAnswer = computeFareHelper(distance, time);
    answer = tempAnswer + (tempAnswer/2);
  }else{
  	answer = computeFareHelper(distance, time);
  }
  writeAnswer(answer);
}

computeFare(3.5, 4, true);

//END OF CODE COPIED FROM JSFIDDLE