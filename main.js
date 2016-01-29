$(document).on('ready', function() {
 console.log('sanity check!');
});

//Set variables & shit

var selection;
var winCount = 0;
var lossCount = 0;
var tieCount = 0;


//Click listeners for pictures & on hover

$('#rock').on('click', function(){
 selection = 1;
 var compSel = computerChoice();
 // console.log("User selects: ", selection);
 var res = compare(compSel, selection);
 appendResults(res);

 // console.log("Wins", winCount,"Losses", lossCount, "Ties: ", tieCount);
});

$('#paper').on('click', function(){
 selection = 2;
 var compSel = computerChoice();
 // console.log("User selects: ", selection);

 var res = compare(compSel, selection);
 appendResults(res);

 // console.log("Wins", winCount,"Losses", lossCount, "Ties: ", tieCount);


});

$('#scissors').on('click', function(){
 selection = 3;
 var compSel = computerChoice();
 // console.log("User selects: ", selection);

 var res = compare(compSel, selection);
 appendResults(res);
 // console.log("Wins", winCount,"Losses", lossCount, "Ties: ", tieCount);

});

//localStorage for win count


//logic for option score

function compare(comp, person){
 console.log("Computer selects: ", comp, "Human selects: ", person);
 if (comp === 1 && person === 3){
   lossCount++;
   return "loss";
 } else if ( comp === 3 && person === 1){
   winCount++
   return "win";
 } else if ( comp > person ){
   lossCount++;
   return "loss";
 } else if ( person > comp ){
   winCount++;
   return "win";
 } else {
   tieCount++;
   return "tie";
 }
}

//outputting result

function appendResults(result){
 switch(result){
   case "win":
     console.log("winner");
     $("#results").html("You won");
     $("#recordWin").html("WIN:"+ winCount);
     break;
   case "loss":
     console.log("loser");
     $("#results").html("You lost");
     $("#recordLoss").html("LOSS:"+ lossCount);

     break;
   case "tie":
     console.log("tie");
     $("#results").html("You tied");
     $("#recordTie").html("TIE:"+ tieCount);

     break;
 }
}

//Computer random selection

function computerChoice(){
 var compChoice =  Math.floor(Math.random() * 3) + 1;
 return compChoice;
 // console.log(compChoice);
}