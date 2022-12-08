import p5 from "p5"

let s = (sk) => {
  let yPosition = 300;
  let restLength = 200;
  let springStrength = .045;
  let velocity = 0;
  
  sk.setup = () =>{
    sk.createCanvas(600, 400);
  }

  sk.draw = () =>{
    sk.background(112, 200, 126);
    sk.fill(45, 197, 244);
    sk.circle(300, yPosition, 64);
    
    let displacementAmount = yPosition - restLength;
    let force = - springStrength * displacementAmount;
    velocity += force;
    yPosition += velocity;

    velocity *= .92
  }
}

// let s = (sk) => {
//   var mousePos,
//     pos,
//     target,
//     vel,
//     drag;
    
//   sk.setup = () =>{
//     sk.createCanvas(600, 400);
    
//     mousePos = sk.createVector(0,0);
//     pos = sk.createVector(0,0);
//     target = sk.createVector(0,0);
//     vel = sk.createVector(0,0);
    
//     drag = 0.76; //need to take some force away, 1 = no drag
//     sk.strength = 0.15; // the "strength" of the spring, out of 1
    
//     sk.r = 40; 
//   }
  
//   sk.draw = () => {
//     sk.background(112, 200, 126);
//     mousePos.set(sk.mouseX, sk.mouseY);
//     target = mousePos;

//     var force = p5.Vector.sub(target, pos);
//     force = force.mult(sk.strength);
//     vel = vel.mult(drag);
//     vel = vel.add(force);  
//     pos = pos.add(vel);
    
//     sk.fill(45, 197, 244);
//     sk.ellipse(pos.x, pos.y, sk.r);
//   }
// }

const P5 = new p5(s);
