const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, block,block2,block3;
var array = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];
var array7 = [];


function preload()
{
	
}

function setup() {
	createCanvas(500, 750);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(random(15,385),40,10);
	block = new Block(200,700,400,10);
	block2 = new Block(399.9,350,10,710);
	block3 = new Block(0.1,350,10,710);


	for (var i = 50; i < 400; i = i+50){
	array.push(new Block(i, 600, 10, 200));
}

	for (var x = 15; x < 400; x = x+45){
	array2.push(new Plinko(x,100,10));
}

	for (var a = 32; a < 400; a = a+45){
	array3.push(new Plinko(a,140,10));
}

	for (var b = 15; b < 400; b = b+45){
	array4.push(new Plinko(b,180,10));
}

	for (var c = 32; c < 400; c = c+45){
	array5.push(new Plinko(c,220,10));
}

	for (var d = 15; d < 400; d = d+45){
	array6.push(new Plinko(d,260,10));
}

for (var z = 32; z < 400; z = z+45){
	array7.push(new Plinko(z,300,10));
}

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for (var j = 0; j < array.length; j = j+1){
	  array[j].display();
  }

  for (var y = 0; y < array2.length; y = y + 1){
	array2[y].display();
}

  for (var e = 0; e < array3.length; e = e + 1){
	array3[e].display();
}


  for (var f = 0; f < array4.length; f = f + 1){
	array4[f].display();
}


  for (var g = 0; g < array5.length; g = g + 1){
	array5[g].display();
}
	
  for (var h = 0; h < array6.length; h = h + 1){
	array6[h].display();
}
	
for (var w = 0; w < array7.length; w = w + 1){
	array7[w].display();
}

 ball.display();
block.display();
block2.display();
block3.display();

}