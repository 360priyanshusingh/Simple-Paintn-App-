



function mouseDown(event) 
{
    var i;
    var highestIndex = -1;		
    var bRect = canvas.getBoundingClientRect();

    mouseX = (event.clientX - bRect.left)*(canvas.width/bRect.width);
    mouseY = (event.clientY - bRect.top)*(canvas.height/bRect.height);
    
    //To find that which circle has been clicked
    for (i=0; i < circleCount; i++) {
        if	(isCircleClicked(circles[i], mouseX, mouseY)) {
            draggingMove = true;
            if (i > highestIndex) {
                dragX = mouseX - circles[i].x;
                dragY = mouseY - circles[i].y;
                highestIndex = i;
                dragIndexMove = i;
            }				
        }
    }
    if (draggingMove) {
        window.addEventListener("mousemove", mouseMove, false);
        //Remove the circle and then push it to the top of the array
        circles.push(circles.splice(dragIndexMove,1)[0]);
        
    }
    canvas.removeEventListener("mousedown", mouseDown, false);
    window.addEventListener("mouseup", mouseUp, false);
    
    if (event.preventDefault) {
            event.preventDefault();
        } 
    else if (event.returnValue) {
            event.returnValue = false;
        } 
    return false;
}

function mouseUp(event) {

    canvas.addEventListener("mousedown", mouseDown, false);
    window.removeEventListener("mouseup", mouseUp, false);
    if (draggingMove) {
        draggingMove = false;
        window.removeEventListener("mousemove", mouseMove, false);
    }
}

function mouseMove(event) {
    
    var posX;
    var posY;
    var shapeRad = circles[circleCount-1].rad;
    var minX = shapeRad;
    var maxX = canvas.width - shapeRad;
    var minY = shapeRad;
    var maxY = canvas.height - shapeRad;
    
    var bRect = canvas.getBoundingClientRect();
    mouseX = (event.clientX - bRect.left)*(canvas.width/bRect.width);
    mouseY = (event.clientY - bRect.top)*(canvas.height/bRect.height);
    
    posX = mouseX - dragX;
    posX = (posX < minX) ? minX : ((posX > maxX) ? maxX : posX);
    posY = mouseY - dragY;
    posY = (posY < minY) ? minY : ((posY > maxY) ? maxY : posY);
    
    circles[circleCount-1].x = posX;
    circles[circleCount-1].y = posY;
    
    drawCircles();
}


