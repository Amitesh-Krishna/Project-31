const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

plinkos = [];
divisions = [];
particles = [];

function setup() {
	createCanvas(480, 800);

	var a = 0;
	engine = Engine.create();
	world = engine.world;

	ground = new Stabox(240,790,480,20);

	//plinkos
	for(var y = 30;y<=400;y+=70){
		for(var x = 0 +a;x < 480;x+=60){
			plinkos.push(new Plinko(x,y,7));
		}
		if(a == 0){
			a = 20;
		}else{
			a = 0;
		}
	}

	//divisions
	for(var b = 0;b<=480;b+=80){
		divisions.push(new Stabox(b,700,10,250))
	}

	Engine.run(engine);
}

function draw() {
	background(127.5);

	if(frameCount%60 == 0){
		particles.push(new Particle(random(210,270),0,8))
	}

	for(var i = 0;i<=plinkos.length;i++){
		var plinko = plinkos[i];

		if(plinko){
			plinko.display();
		}
	}

	for(var j = 0;j<divisions.length;j++){
		var division = divisions[j];
		division.display();
	}

	for(var d = 0;d<=particles.length;d++){
		var particle = particles[d];
		if(particle){
			particle.display();
		}
	}
}
