import p5 from "p5"

let s = (sk) => {
  let yPosition = 300;
  let restLength = 200;
  let springStrength = .033;
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

const P5 = new p5(s);
