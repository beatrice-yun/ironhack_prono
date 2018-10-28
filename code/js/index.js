// Function to delete matchs
function deleteMatch(e){
  
  // We isolate the product row by pulling the "currentTarget" of the
  // click event and then working backwards to the parent of its parent,
  // div with a class of "matchRow"
  var selectedRow = e.currentTarget.parentNode.parentNode;

  // We then work one level farther back by pulling the parent of the
  // div with a class of "itemRow", section element with id "items-list"
  var matchList = selectedRow.parentNode;

  // We then remove the "selectedRow" div element from the item list
  // using "removeChild"
  matchList.removeChild(selectedRow);
}

// All necessary code to create a new match.

function createScoreInput(){

  // First, we define what element we would like to create.
  var inputNode = document.createElement('input');

  // Then, we associate the needed class "score-input" with that element
  inputNode.className = "socre-input";

  // We assign to inputNode the style width 40%
  // inputNode.style="40%";

  // We set an initial value of "0" for scores
  inputNode.value = 0;

  // We return the fully-generated elements to be used in "createNewMatchRow"
      return inputNode;  
}

function createDeleteButton(){
      
  // First, we define what element we would like to create.
  var div = document.createElement('div');

  // Then, we associate the needed class "match-delete" with that element
  div.className = "match-delete col-xs-3";

  // Next, we create the delete button to be included in this element
  var buttonNode = document.createElement('button');

  // We assign a class, inner content, and an "onclick" behavior to the item,
  // referring back to the "deleteMatch" function that we defined earlier
  buttonNode.className = "btn btn-delete";

  // We fill the button with content
  buttonNode.innerHTML = "Supprimer";

  // We assign the "onclick" behavior to the function that we defined earlier,
  // "deleteMatch"
  buttonNode.onclick = deleteMatch;

  // Finally, we connect the delete button to its container.
  div.appendChild(buttonNode);

  // We return the fully-generated HTML element to be used in "createNewMatchRow"
  return div;

}

function createScorePlayer1Node(){

  // First, we define what element we would like to create.
  var element = document.createElement('div');

  // Then, we associate the necessary class.
  element.className = "score-player col-xs-3";

  // Next, we generate the label for the quantity input 
  // var label = document.createElement('label');

  // We then place content describing this input inside
  // label.innerHTML = "QTY";

  // We then use the "createQuantityInput" function defined earlier
  // to generate the input portion of the div element. Notice how
  // we're abstracting specific tasks into other functions.
  var input1 = createScoreInput();
  var input2 = createScoreInput();
  
  // We assign the class "score-input" to the inputs
  input1.className="score-input";
  input2.className="score-input";

  // We then attach the generated label and input to the parent element
  // element.appendChild(label);
  element.appendChild(input1);
  element.appendChild(input2);

  // We return the fully-generated HTML element to be used in "createNewItemRow"
  return element;
}

function createScorePlayer2Node(){

  // First, we define what element we would like to create.
  var element = document.createElement('div');

  // Then, we associate the necessary class.
  element.className = "score-player col-xs-3";

  // Next, we generate the label for the quantity input 
  // var label = document.createElement('label');

  // We then place content describing this input inside
  // label.innerHTML = "QTY";

  // We then use the "createQuantityInput" function defined earlier
  // to generate the input portion of the div element. Notice how
  // we're abstracting specific tasks into other functions.
  var input1 = createScoreInput();
  var input2 = createScoreInput();
  
  // We assign the class "score-input" to the inputs
  input1.className="score-input";
  input2.className="score-input";

  // We then attach the generated label and input to the parent element
  // element.appendChild(label);
  element.appendChild(input1);
  element.appendChild(input2);

  // We return the fully-generated HTML element to be used in "createNewItemRow"
  return element;
}

function createScorePlayer3Node(){

  // First, we define what element we would like to create.
  var element = document.createElement('div');

  // Then, we associate the necessary class.
  element.className = "score-player col-xs-3";

  // Next, we generate the label for the quantity input 
  // var label = document.createElement('label');

  // We then place content describing this input inside
  // label.innerHTML = "QTY";

  // We then use the "createQuantityInput" function defined earlier
  // to generate the input portion of the div element. Notice how
  // we're abstracting specific tasks into other functions.
  var input1 = createScoreInput();
  var input2 = createScoreInput();

  // We assign the class "score-input" to the inputs
  input1.className="score-input";
  input2.className="score-input";

  // We then attach the generated label and input to the parent element
  // element.appendChild(label);
  element.appendChild(input1);
  element.appendChild(input2);

  // We return the fully-generated HTML element to be used in "createNewItemRow"
  return element;
}

function createScoreFinalNode(){

  // First, we define what element we would like to create.
  var element = document.createElement('div');

  // Then, we associate the necessary class.
  element.className = "score-player col-xs-3";

  // Next, we generate the label for the quantity input 
  // var label = document.createElement('label');

  // We then place content describing this input inside
  // label.innerHTML = "QTY";

  // We then use the "createQuantityInput" function defined earlier
  // to generate the input portion of the div element. Notice how
  // we're abstracting specific tasks into other functions.
  var input1 = createScoreInput();
  var input2 = createScoreInput();
  
  // We assign the class "score-input" to the inputs
  input1.className="score-input";
  input2.className="score-input";

  // We then attach the generated label and input to the parent element
  // element.appendChild(label);
  element.appendChild(input1);
  element.appendChild(input2);

  // We return the fully-generated HTML element to be used in "createNewItemRow"
  return element;
}

// Function to create the individual property divs for each match
function createMatchNode(dataType, matchData){
      
  // "matchData" can be the name of the 1st team or the 2nd one,
  // which is defaulted to "Nom de l'équipe" if not supplied.
  matchData = matchData || "Nom de l'équipe";

  // We then create a div element in which to store the name of the teams
  // node
  var element = document.createElement('div');

  // For each match node, we will create a span element to contain
  // the respective information about that node
  var span = document.createElement('span');

  // Here, we use "createTextNode" to generate content that will be
  // unique to each match.
  var matchNode = document.createTextNode(matchData);
      
  // We then add the generated content within the span for each generated
  // match
  span.appendChild(matchNode);

  // We then append the generated span element to the parent div element
  element.appendChild(span);

  // We then dynamically generate the class for each item node based
  // upon its data type.
  element.className = "item-" + dataType + " col-xs-2";

  // We return the fully-generated match node to be used in "createNewMatchRow"
  return element;
    }

// The function to generate a full match row
function createNewMatchRow(team1Name, team2Name){
      
// We create the parent div that will contain all the matchs nodes
// and assign the class "match row" to it
  var matchRow = document.createElement('div');
  matchRow.className = "match-row";

// Here, we use all of the functions that we have defined earlier,
// each of which handles one subtask for generating a parent match 
// node. Notice that this makes the function far easier to read since
// we're abstracting sub-tasks to other functions.
  var team1NameNode = createMatchNode("team1", team1Name);
  var team2NameNode = createMatchNode("team2", team2Name);
  var scorePlayer1Node = createScorePlayer1Node();
  var scorePlayer2Node = createScorePlayer2Node();
  var scorePlayer3Node = createScorePlayer3Node();
  var scoreFinalNode = createScoreFinalNode();
  var button = createDeleteButton();

// Finally, we append all the generated matchs nodes to the matchRow
  matchRow.appendChild(team1NameNode);
  matchRow.appendChild(team2NameNode);
  matchRow.appendChild(scorePlayer1Node);
  matchRow.appendChild(scorePlayer2Node);
  matchRow.appendChild(scorePlayer3Node);
  matchRow.appendChild(scoreFinalNode);
  matchRow.appendChild(button);

  // We return the fully-generated mact row
  return matchRow;
    }

// The function to place a newly created macth row in its appropriate
// place.
function createNewMatch(){

  // We select the section containing all items generated using the class
  // "matchs-list" ATTENTION ICI JE PENSE QUE C EST MATCH ROW PAS MATCH LIST
  var matchsList = document.getElementById('matchs-list');

  // Here, we generate an HTMLCollection that consists of all matchs rows.
  // We then pull the length of the list.
  var matchRowsLength = matchsList.getElementsByClassName('match').length;

  // We dynamically determine the last match row by subtracting one from the
  // total length of matchs, yielding us the last match row.
  var lastMatchRow = matchsList.getElementsByClassName('match')[matchRowsLength-1];

  // We pull the value from the 'new-team1-name' input.
  var team1Name = document.getElementById('new-team1-name').value;

  //We assign to team1Name the class "team-name col-xs-2".
  // team1Name.className="team-name col-xs-2";

  // We pull the value from the 'new-team2-name' input.
  var team2Name = document.getElementById('new-team2-name').value;
  
  //We assign to team2Name the class "team-name col-xs-2".
 //  team2Name.className="team-name col-xs-2";

  // We use "createNewMatchRow" to generate a full match row based on
  // the name of each team specified
  var matchRow = createNewMatchRow(team1Name, team2Name);

  // Finally, we append the fully generated match row to the last place
  // in the vertical list of matchs.
  matchsList.insertBefore(matchRow, lastMatchRow);
}

// Code initially included to associate buttons with their respective DOM functions
window.onload = function(){
  var createMatchButton = document.getElementById('new-match-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  createMatchButton.onclick = createNewMatch;
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteMatch;
  }
}