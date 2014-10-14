// Adapted from Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14


// Grammar
var cfree;
// For loading JSON
var grammar;
var characters;
// Preload the JSON
function preload() {
  grammar = loadJSON('data/grammar.json');
  characters = loadJSON('data/characters.json');
}


function setup() {
  // Make a new grammar
  cfree = new ContextFree();

  grammar['N'] = characters['N'];
  console.log(grammar);

  // Look at the JSON object
  for (var rule in grammar) {
    // Get the expansions and split them
    var expansions = grammar[rule].split(/\s*\|\s*/);
    for (var j = 0; j < expansions.length; j++) {
      // Now split up each expansion into its own array
      expansion_list = expansions[j].split(/\s+/);
      // Add the rule
      cfree.add_rule(rule, expansion_list);
    }
  }

  noCanvas();
}


function generate() {
  // Make a DIV with the new sentence
  var expansion = cfree.get_expansion('S');
  expansion = expansion.replace(/%/g,'<br/>');

  $('#answer').fadeOut(350, function(){
    $('#answer').text(expansion);
    $('#answer').fadeIn(350);
  });
  
 
}