window.onload = function(){
	var canvas = document.getElementById("myCanvas"),
	    context = canvas.getContext("2d"),
	    width = canvas.width = window.innerWidth,
	    height = canvas.height = window.innerHeight;


        var xRadius = width*.64,
            yRadius = height*.34,
            pointArray = [],
            i = 0,
            centerX = width*.5,
            centerY = height*.5;


        for(i = 0;i < 400;i++ ){
               p = {
                     
                    "xSpeed": Math.random()/60,
                    "ySpeed": Math.random()/60,
                    "xAngle": Math.random(),
                    "yAngle": Math.random(),
                    "positionX": centerX + Math.cos(this.xAngle)*xRadius,
                    "positionY": centerY + Math.sin(this.yAngle)*yRadius
            };
           pointArray.push(p);

        }
  



    render();

    function render(){

         //context.clearRect(0,0,width,height);
         
         for(var i = 0;i < pointArray.length;i++){
             context.beginPath();
             context.arc(pointArray[i].positionX,pointArray[i].positionY,2,0,Math.PI*2);
             context.fill();
         }
         update();
         
    	 requestAnimationFrame(render);
    }



   function update(){
        
         for(var i = 0;i < pointArray.length;i++){
          pointArray[i].positionX = centerX + Math.cos(pointArray[i].xAngle)*xRadius;
          pointArray[i].positionY = centerY + Math.sin(pointArray[i].yAngle)*yRadius;
          pointArray[i].xAngle += pointArray[i].xSpeed;
          pointArray[i].yAngle += pointArray[i].ySpeed;
          
         }
   }


};
