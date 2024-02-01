let sketch1 = function(p){
  p.setup = function(){
    p.createCanvas(180,90);
};
 p.draw = function(){
   p.background(125,255,0);
   p.ellipse(50,45,75);
   p.rect(100,10,70);
 };
};

let sketch2 = function(p){
  p.setup = function(){
    p.createCanvas(300,200);
  };
  p.draw = function(){
    p.background(225);

    p.stroke(255,0,0,0);
    p.fill(0,0,255,100); 
    p.ellipse(120,125,100,100);

    p.fill(0,255,0,100);
    p.ellipse(180,125,100,100);
    
    p.fill(255,0,0,100);
    p.ellipse(150,75,100,100);
  };
};

let sketch3 = function(p){
  p.setup = function(){
    p.createCanvas(200,100);
  };
  p.draw = function(){
    p.background(1);

    p.fill(230,60,0,255);
    p.arc(142,50,82.2,80,-PI,0,CHORD);
    p.stroke(0,0,0,0);
    p.rect(101,50,82,43);

    p.fill(255,255,255,255);
    p.ellipse(121,50,25,25);
    p.ellipse(121,50,25,25);
    p.fill(0,0,255,255);
    p.ellpise(121,50,15,15);
    p.ellipse(163,50,15,15);

    p.fill(255,255,0);
    p.arc(50,50,80,80,-PI + 0.8, PI - 0.9, PIE);
  };
};

let sketch4 = function(p){
  p.setup = function(){
    p.createCanvas(200,200);
  };
  p.draw = function(){
    p.background(0,0,128);
  
    // white outline
    p.stroke(255,255,255,255);
    p.strokeWeight(3);
    
    // green circle
    p.fill(0,128,0,255);
    p.ellipse(100,100,95,95);
    
    // red star
    p.fill(255,0,0,255);
    p.beginShape();
    
    // right arm
    p.vertex(142,80);
    // right arm + head concave
    p.vertex(112,85);
    // head (15)
    p.vertex(100,52.5);
    // left arm + head concave
    p.vertex(87,85);
    // left arm
    p.vertex(57,80);
    // left arm + left leg concave
    p.vertex(82,105);
    // left leg
    p.vertex(69.5,135);
    // left leg + right leg concave
    p.vertex(99,117.5);
    // right leg
    p.vertex(132,133);
    // right arm + right leg concave
    p.vertex(117,105);
    
    p.endShape(CLOSE);
     
  };
};


new p5(sketch1, 'Canvas1');
new p5(sketch2, 'Canvas2');
new p5(sketch3, 'Canvas3');
new p5(sketch4, 'Canvas4');