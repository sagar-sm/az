
var lotr;
window.onload = $.get('data/lotr_book56.txt', function(_lotr) { 
  lotr = _lotr;
});

function generate() {

  //get all checked boxes
  var characters = $('input:checkbox:checked').map(function() {
    return this.value;
  }).get();

  //concat the above array separated by |
  var OrString = characters.reduce(function(a,b){ return a + b + '|'; }, '');
  OrString = OrString.substring(0, OrString.length - 1);


  var regex = new RegExp("^((?!.*?(" + OrString + ").*?).)*?$","gmi");

  var results = regex.exec(lotr);

  while( results != null) {
    $('.out').append(results[0]);
    $('.out').append("<br><br>");

    results = regex.exec(lotr);
  }

}