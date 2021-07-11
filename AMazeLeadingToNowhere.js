let x = 0;
let y = 0;
let spacing = 12;
let i = 10;
let speed = 2;

function setup() 
{
  createCanvas(300, 300);
  background(0);
  strokeWeight(2)
}

function draw() 
{
  stroke(14, 107, 14);
  if(random(1) < 0.5)
    {
      if((x > 120 && x < 170) && (y > 130 && y < 180))
        {
          stroke(249, 1, 63);
        line(x, y, x + spacing, y + spacing);
        }
      else
        {
          stroke(14, 107, 14);
        line(x, y, x + spacing, y + spacing);
        }
    }
  else
    {
      if((x > 120 && x < 170) && (y > 130 && y < 180))
        {
          stroke(249, 1, 63);
        line(x, y + spacing, x + spacing, y);
        }
      else
        {
          stroke(14, 107, 14);
        line(x, y + spacing, x + spacing, y);
        }
    }
  x = x + spacing;
  if(x > width)
    {
      x = 0;
      y = y + spacing;
    }
}
