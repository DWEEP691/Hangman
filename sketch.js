var line1 = ['','',''];
var line2 = ['','',''];
var line3 = ['','',''];

var c1= 0,c2 = 0,c3 = 0,c4 = 0;

var board;

function preload() {

}

function setup(){
    var canvas = createCanvas(300,300);

    board = new Board();
}

function draw(){
    background(0);

    board.display();
}
