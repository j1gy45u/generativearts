let x = 1000
let y = 1000
function setup()
{
    createCanvas(500, 500)
    angleMode(DEGREES)
    background(0)
}

function draw()
{
    noFill()
    strokeWeight(1)
    stroke(random(0,360),random(0,360),random(0,360))
    translate(width/2, height/2)
    ellipse(sin(y) * 200, cos(x) * 200, cos(y) * 200, sin(x) * 200)
    rotate(tan(180))
    ellipse(cos(y) * 200, sin(x) *  200, sin(y) * 200, cos(x) * 200)
    x = x - noise(100)
    y = y - noise(100)
}
