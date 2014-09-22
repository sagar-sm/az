/*
Phyllotaxis in p5.
Modified from the original ver by @jbum.
*/

function setup() {
  createCanvas(1500,900);
  textFont("Georgia");
  textSize("30");
}
var N = 0;

function draw() {
  noStroke();
  colorMode(RGB, 100);
  ellipse(x,y,4,4);
  background(100,100,100,30);
  fill(0);
  text("phyllotaxis.", 170, 170);
  N++;
  var phi = (sqrt(5)+1)/2 - 1;            // golden ratio
  var golden_angle = phi * TWO_PI;        // golden angle
  var deviation = 5/8.0;
  
  var outerRadius = width * .15;
  var lg_area = sq(outerRadius) * PI;
  
  var mean_area = lg_area / N;
  
  var min_area = mean_area * (1-deviation);
  var max_area = mean_area * (1+deviation);
  
  var cumulative_area = 0;
  
  var fudge = .87;
  
  for (var i = 1; i <= N; ++i) {
    var angle = i*golden_angle;
  
    var ratio = i / N;
    var sm_area = min_area + ratio * (max_area - min_area);
    var sm_dia = 2 * sqrt( sm_area / PI );
    var adj_sm_dia = sm_dia * fudge;
  
    cumulative_area += sm_area;
  
    var spiral_rad = sqrt( cumulative_area / PI );
  
    var x = width/3 + cos(angle) * spiral_rad;
    var y = height/3 + sin(angle) * spiral_rad;

    colorMode(HSB, 100);
    fill(N%100, 100, 51);
    ellipse(x, y, adj_sm_dia, adj_sm_dia);
  }
  
}