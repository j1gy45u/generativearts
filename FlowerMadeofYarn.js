function setup()
{
    createCanvas(500, 500)
    angleMode(DEGREES)
    frameRate(24)
    background(0)
}

function draw()
{
    noFill()
    strokeWeight(0.1)
    translate(width/2, height/2)
    for(let i = 0; i < 90; i++)
    {
        if(random(1) <= 0.5)
        {
            stroke(249, 1, 63)
            rect(i, i, i, i)
            rotate(sin(90))
        }
        else
        {
            stroke(249, 1, 63)
            rect(i, i, i, i)
            rotate(56)
        }
    }
}
