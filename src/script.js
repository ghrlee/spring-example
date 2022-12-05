import p5 from "p5"

let s = (sk) => {
  let y = 250;
  let velocity = 0;
  let restLength = 200;
  let k = .033;
  
  sk.setup = () =>{
    sk.createCanvas(600, 400);
  }

  sk.draw = () =>{
    sk.background(112, 200, 126);
    sk.fill(45, 197, 244);
    sk.circle(300, y, 64);
    let x = y - restLength;
    let force = - k * x;
    console.log(y)
    // f = m * a
    velocity += force;
    y += velocity;
    
    velocity *= .92
  }
  

}


const P5 = new p5(s);

