"use strict";

/*

 Problem 2:

 Background:
 Bangalore has heavy traffic. One common cause is slow-moving vehicles using the same lanes as fast-moving vehicles.
 Auto rickshaws form a majority of these slow-moving vehicles.
 http://bit.ly/oz3969

 Problem statement:
 The Indian government traffic jam analysis department has done some research and has found that traffic jams will occur
 when the number of auto rickshaws on the road is more than 40. Unless it is after 8pm in which case there are no
 traffic jams because the daytime traffic has finished.

 Examples:

 Given there are 30 auto rickshaws on the road
 And the time is before 8pm
 When I check to see if there is a traffic jam.
 Then no traffic jam is predicted

 Given there are 41 auto rickshaws on the road
 And the time is before 8pm
 When I check to see if there is a traffic jam.
 Then a traffic jam is predicted

 Given there are 60 auto rickshaws on the road
 And the time is after 8pm
 When I check to see if there is a traffic jam.
 Then no traffic jam is predicted

 */

/*
function changeElementText(element, answer) {
    $(element).text(answer);
}

function isTrafficJam(numberOfAutoRickshaws, isAfterEightPm) {
    changeElementText("#numberOfRickshaws", "some");
    changeElementText("#beforeOrAfter", "before or after");
    var answer = "maybe a";

    // write some code here!

    changeElementText("#aOrNo", answer);
}*/



//BELOW IS MY CODE COPIED FROM JSFIDDLE
// helper function for output
function writeAnswer(answer) {
    $('div.answer').append($('<div>').text(answer));
}

function isTrafficJam(numberOfAutoRickshaws, isAfterEightPm) {
    var answer;

    // write some code here!
    if(numberOfAutoRickshaws > 40 && isAfterEightPm == false){
    	answer = true;
    }else{
    	answer = false;
    }
    writeAnswer(answer);
}

isTrafficJam(41, false);
//END OF CODE COPIED FROM JSFIDDLE