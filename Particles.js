class Particles{
    constructor(x,y,r){
        
            var options = {
                'restitution' : 0.3,
                'friction' : 5,
                'density' : 1
     
            }
        // assign options to the rubber ball
            this.x=x;
            this.y=y;
            this.r=r
            this.body=Bodies.circle(x, y, this.r, options);
            this.color= color(random(0,255), random(0,255), random(0,255));
            World.add(world, this.body);
    
        }
        display()
        {
            //this.color.display();
                var particlespos=this.body.position;	
                
                push();
                translate(particlespos.x, particlespos.y);
                rectMode(CENTER);
                	
          fill(this.color);     
    ellipse(0,0,this.r,this.r);
                pop();
        }
    
    }
    
