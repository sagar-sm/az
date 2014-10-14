
var lotr;
window.onload = $.get('data/lotr_book56.txt', function(_lotr) { 
  lotr = _lotr;
});

function generate() {

  $.get('data/lotr_book56.txt', function(_lotr) { 
    lotr = _lotr;
  });
  // get all checked boxes
  var characters = $('input:checkbox:checked').map(function() {
    return this.value;
  }).get();

  // concat the above array separated by |
  var OrString = characters.reduce(function(a,b){ return a + b + '|'; }, '');
  OrString = OrString.substring(0, OrString.length - 1);


  // var regex = new RegExp("^((?!.*?(" + OrString + ").*?).)*?$","gmi"); //Match all that don't contain __. Warning! Bad O(n).
  var regex = new RegExp("^.*(" + OrString + ").*$","mi");

  var results = regex.exec(lotr);

  // remove all matching lines containing the OrStrings
  while( results != null) {
    lotr = lotr.replace(results[0], '');
    results = regex.exec(lotr);
  }

  // HTMLize the plain text
  regex = /Chapter \d+\n/mi;
  results = regex.exec(lotr);
  while(results != null){
    console.log(results[0]);
    lotr = lotr.replace(results[0], '<h2>'+ results[0] + '</h2>');
    results = regex.exec(lotr);
  }

  lotr = lotr.replace(/\n+/g, "<br><br>");
  // lotr = lotr.replace(/Chapter \d+/g, /<h2>\1<\/h2>/);
  $('.out').append(lotr);
  //$('.out').append("<br><br>");

}