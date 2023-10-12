
function moveRandomly(){

    if(document.getElementById("btnMove").name=="Move Random")
        {		
            flagRandom=true;
            document.getElementById("btnMove").name="Stop Random";
            moveRandom();
        }
        
    else{
        
            flagRandom=false;
            document.getElementById("btnMove").name="Move Random";
            clearInterval();
        }		
    }
    
    function moveRandom(){
    if(flagRandom==true)
    {	
        for (i=0; i < circleCount; i++) {
            
            dx=Math.floor((Math.random()*50));
            dy=Math.floor((Math.random()*50));
    
            context.clearRect(0,0,canvas.width,canvas.height);
            context.beginPath();
            context.fillStyle=circles[i].color;
    
            context.arc(circles[i].x,circles[i].y,circles[i].rad,0,Math.PI*2,true);
            context.closePath();
            context.fill();
    
            if( circles[i].x<0 || circles[i].x>canvas.width)
                dx=-7*dx;
            if( circles[i].y<0 || circles[i].y>canvas.height)
                dy=-7*dy;
            circles[i].x+=dx;
            circles[i].y+=dy;
        }
    
        drawCircles();
    }
    
    else
    {
        clearInterval();
    }
    }
    
    setInterval(moveRandom,10); 